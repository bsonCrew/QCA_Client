import React from "react";

const useTop5 = () => {
	const [status, setStatus] = React.useState("idle");
	const [data, setData] = React.useState([]);
	const getQuery = "http://localhost:3001/top5";
	// const getQuery = "http://58.124.108.42:11209/api/list";

	React.useEffect(() => {
		if (!getQuery) return;

		const fetchWithPost = async () => {
			setStatus("loading");
			try {
				const response = await fetch(getQuery);
				const data = await response.json();
				setStatus("success");
				setData(data);
			} catch (error) {
				setStatus("error");
			}
		};

		fetchWithPost();
	}, [getQuery]);

	return [status, data.data];
};

export default useTop5;
