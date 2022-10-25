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
	const [classification, setClassification] = React.useState({});
	const [robot, setRobot] = React.useState([]);
	// const postQuery = config.postQuery;
	const postQuery = "http://localhost:3001/list";

	React.useEffect(() => {
		setStatus("loading");

		// Checking localstorage and getting classification
		const checkLocalStorage = () => {
			if (localStorage.getItem(website) !== null) {
				const localData = JSON.parse(localStorage.getItem(website));
				setClassification(localData.classification);
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
				return false;
			}
		};

		// localstorage hit or fetch from server
		if (checkLocalStorage()) {
			// console.log("localStorage hit");
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

			const classifiedAuditResults = calculateAndClassify(auditResults);
			setClassification(classifiedAuditResults);

			// Set lighthouseData to use in datagrid
			setStatus("success");
		}
	}, [status, website, rawData, classification]);

	// return memoized value
	return React.useMemo(() => {
		return [status, classification, robot];
	}, [status, classification, robot]);

	// return [status, classification, robot];
};

export default useQualification;
