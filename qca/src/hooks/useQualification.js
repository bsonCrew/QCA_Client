import React from "react";
import config from "../config";
import calculateAndClassify from "../Components/utils/calculate";

const columns = [
	{
		field: "id",
		headerName: "id",
		width: 100,
		editable: true,
		groupable: false,
		aggregable: false,
	},
	{
		field: "id",
		headerName: "tag",
		width: 100,
		editable: true,
		groupable: false,
		aggregable: false,
	},
	{
		field: "title",
		headerName: "title",
		width: 200,
		editable: true,
		groupable: false,
		aggregable: false,
	},
	{
		field: "score",
		headerName: "score",
		width: 100,
		editable: true,
		groupable: false,
		aggregable: false,
	},
	{
		field: "description",
		headerName: "description",
		width: 900,
		editable: true,
		groupable: false,
		aggregable: false,
	},
];

/** Non-use attributes which are not displayed in the table*/
const nonUseAttributes = config.nonUseAttributes;

const useLighthouse = website => {
	const [status, setStatus] = React.useState("idle");
	const [rawData, setRawData] = React.useState([]);
	const [lighthouseData, setLighthouseData] = React.useState({});
	const [classification, setClassification] = React.useState({});
	const postQuery = "http://localhost:3001/lighthouse";
	// const postQuery = "http://58.124.108.42:11209/api/control";

	const checkRobotTxt = robot => {
		let score = 100;
		for (const el of robot) {
			if (el.type === "disallow") {
				score = 0;
				break;
			}
		}
		return {
			score: score,
			description:
				"robots.txt 파일은 검색 로봇이 웹 사이트 내에서 액세스할 수 있는 URL을 알려 줍니다. 정부는 모든 하위 페이지에 대해 검색 로봇의 완전허용을 권장하고 있습니다. [자세히 알아보기](https://developers.google.com/search/docs/advanced/robots/intro?hl=ko)",
			id: "robots-txt",
			title:
				score === 0
					? "robots.txt에 검색 로봇이 접근이 불가능한(Disallow) 항목이 존재함"
					: "robots.txt에 검색 로봇이 접근이 불가능한(Disallow) 항목이 존재하지 않음",
			scoreDisplayMode: "notApplicable",
		};
	};

	React.useEffect(() => {
		setStatus("loading");
		const checkLocalStorage = () => {
			if (localStorage.getItem(website) !== null) {
				const localData = JSON.parse(localStorage.getItem(website));
				setClassification(localData.classification);
				setLighthouseData(localData.lighthouseData);
				// return true;
			}
			return false;
		};

		const fetchWithPost = async () => {
			console.log("fetching");
			setStatus("loading");
			try {
				const response = await fetch(postQuery, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						url: website,
						requestedDate: new Date().toISOString(),
					}),
				});
				const data = await response.json();
				setRawData(data.data);
				return true;
			} catch (error) {
				console.info(error);
				setStatus("error");
				return false;
			}
		};

		if (checkLocalStorage()) {
			setStatus("success");
		} else {
			fetchWithPost().then(res => {
				if (res) {
					setStatus("fetched");
				}
			});
		}
	}, []);

	React.useEffect(() => {
		if (status === "fetched" && rawData.length !== 0) {
			let auditResults = [];
			const robot = JSON.parse(rawData.robot);
			const validator = JSON.parse(rawData.validator);

			Object.entries(JSON.parse(rawData.audits)).forEach(([, rowValue]) => {
				if (!nonUseAttributes.includes(rowValue.id)) {
					auditResults.push(rowValue);
				}
			});
			auditResults.push(checkRobotTxt(robot));

			const classified = calculateAndClassify(auditResults, robot, validator);
			setClassification(classified);

			setLighthouseData({
				columns: columns,
				rows: auditResults,
				initialState: {
					columns: {
						columnVisibilityModel: {
							id: false,
						},
					},
				},
			});
			setStatus("success");
		}
	}, [status, website, rawData, classification]);

	return [status, lighthouseData, classification];
};

export default useLighthouse;
