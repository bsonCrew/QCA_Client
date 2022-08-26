import React from "react";

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

const useLighthouse = website => {
	const [status, setStatus] = React.useState("idle");
	const [data, setData] = React.useState([]);
	const entriesValue = {
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

	console.info(data);

	const postQuery = "http://localhost:3001/lighthouse";
	// const postQuery = "http://34.64.198.147:8080/api/control";

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
					body: JSON.stringify({ url: website }),
				});
				const data = await response.json();
				setStatus("success");
				setData(data);
			} catch (error) {
				console.info(error);
				setStatus("error");
			}
		};

		fetchWithPost();
	}, []);

	for (const [, val] of Object.entries(data)) {
		entriesValue["rows"].push({ ...val });
	}

	return [status, entriesValue];
};

export default useLighthouse;
