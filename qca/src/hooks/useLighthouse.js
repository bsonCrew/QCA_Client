import React from "react";
import config from "../config";
import classify from "../Components/utils/calculate";

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

const calculateScore = (score, total) => {};

/** Non-use attributes which are not displayed in the table*/
const nonUseAttributes = [
	"full-page-screenshot",
	"apple-touch-icon",
	"installable-manifest",
	"pwa-cross-browser",
	"pwa-each-page-has-url",
	"pwa-page-transitions",
	"maskable-icon",
	"metrics",
	"oopif-iframe-test-audit",
	"screenshot-thumbnails",
	"service-worker",
	"themed-omnibox",
	"valid-source-maps",
	"work-during-interaction",
	"final-screenshot",
	"inspector-issues",
	"largest-contentful-paint-element",
];

const useLighthouse = website => {
	const [status, setStatus] = React.useState("idle");
	const [data, setData] = React.useState([]);

	const lighthouseResults = {
		columns: columns,
		rows: [],
		initialState: {
			columns: {
				columnVisibilityModel: {
					id: false,
				},
			},
		},
	};

	const postQuery = "http://localhost:3001/lighthouse";
	// const postQuery = "http://13.209.177.236:8080/api/control";

	React.useEffect(() => {
		if (!postQuery) return;

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
				setStatus("success");
				setData(data);
				return true;
			} catch (error) {
				console.info(error);
				setStatus("error");
				return null;
			}
		};

		if (fetchWithPost()) {
		}
	}, [website]);

	if (status === "success") {
		for (const [, rowValue] of Object.entries(data)) {
			lighthouseResults["rows"].push({ ...rowValue });
		}

		// Filter out non-use attributes
		lighthouseResults["rows"] = lighthouseResults["rows"].filter(row => {
			return !nonUseAttributes.includes(row.id);
		});

		const res = classify(lighthouseResults["rows"]);
		console.log(lighthouseResults);
	}

	return [status, lighthouseResults];
};

export default useLighthouse;
