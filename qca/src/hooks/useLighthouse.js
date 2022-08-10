// import React from "react";
// import lighthouse from "lighthouse";

// const useLightHouse = () => {
// 	const [report, setReport] = React.useState(null);
// 	const [score, setScore] = React.useState(null);
// 	const [loading, setLoading] = React.useState(false);
// 	const chromeLauncher = require("chrome-launcher");

// 	React.useEffect(() => {
// 		getLightHouse().then(setReport);
// 	}, []);

// 	async function getLightHouse() {
// 		const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
// 		const options = {
// 			logLevel: "info",
// 			output: "json",
// 			onlyCategories: ["performance"],
// 			port: chrome.port,
// 		};
// 		const runnerResult = await lighthouse("https://example.com", options);

// 		// `.report` is the HTML report as a string
// 		const reportArr = runnerResult.report;

// 		setScore(runnerResult.lhr.categories.performance.score * 100);

// 		await chrome.kill();
// 	}

// 	return [report, score, loading];
// };

// export default useLightHouse;
