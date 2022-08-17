import React from "react";

const useLighthouse = website => {
	const [status, setStatus] = React.useState("idle");
	const [data, setData] = React.useState([]);
	// const postQuery = "http://localhost:3001/lighthouse";
	const postQuery = "http://34.64.198.147:8080/api/control";

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
				console.log(error);
				setStatus("error");
			}
		};

		fetchWithPost();
	}, [postQuery, website]);

	return [status, data];
};

export default useLighthouse;
