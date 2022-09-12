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

			const res = calculateAndClassify(auditResults, robot, validator);
			setClassification(res);

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
