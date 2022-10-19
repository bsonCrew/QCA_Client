import React from "react";
import config from "../config";
import calculateAndClassify from "../Components/utils/classifyAndCalculate";
import checkRobotTxt from "../Components/utils/checkRobotTxt";
import calculateValidator from "../Components/utils/calculateValidator";

/** Non-use attributes which are not displayed in the table*/
const nonUseAttributes = config.nonUseAttributes;

const useQualification = website => {
	const [status, setStatus] = React.useState("idle");
	const [rawData, setRawData] = React.useState([]);
	const [lighthouseData, setLighthouseData] = React.useState({});
	const [classification, setClassification] = React.useState({});
	const [robot, setRobot] = React.useState([]);
	const postQuery = "http://localhost:3001/lighthouse";
	// const postQuery = "http://58.124.108.42:11209/api/control";

	React.useEffect(() => {
		setStatus("loading");

		// Checking localstorage and getting classification and lighthouseData
		const checkLocalStorage = () => {
			if (localStorage.getItem(website) !== null) {
				const localData = JSON.parse(localStorage.getItem(website));
				setClassification(localData.classification);
				setLighthouseData(localData.lighthouseData);
				setRobot(localData.robot);
				return true;
			}
			return false;
		};

		// Fetching from server
		const fetchWithPost = async () => {
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
				if (data.status === 200) {
					return true;
				} else {
					setStatus("fetchedButFounderror");
					return false;
				}
			} catch (error) {
				setStatus("error");
				console.log("error occured");
				return false;
			}
		};

		// localstorage hit or fetch from server
		if (checkLocalStorage()) {
			setStatus("success");
		} else {
			try {
				fetchWithPost().then(res => {
					if (res) {
						setStatus("fetched");
					}
				});
			} catch (e) {
				console.log(e);
			}
		}

		console.log("fish");
	}, []);

	React.useEffect(() => {
		// Calculate only when fetched. Localstorage has calculated value.
		if (status === "fetched" && rawData.length !== 0) {
			let auditResults = [];
			const robot = JSON.parse(rawData.robot);
			setRobot(robot);

			const validator = JSON.parse(rawData.validator);

			// Parse data
			Object.entries(JSON.parse(rawData.audits)).forEach(([, rowValue]) => {
				if (!nonUseAttributes.includes(rowValue.id)) {
					auditResults.push(rowValue);
				}
			});

			// Add robots.txt and validator API
			auditResults.push(checkRobotTxt(robot));
			calculateValidator(validator).forEach(val => auditResults.push(val));

			const classified = calculateAndClassify(auditResults, robot, validator);
			setClassification(classified);

			// Set lighthouseData to use in datagrid
			setLighthouseData(auditResults);
			setStatus("success");
		}
	}, [status, website, rawData, classification]);

	return [status, lighthouseData, classification, robot];
};

export default useQualification;
