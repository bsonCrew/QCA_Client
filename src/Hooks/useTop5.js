import React from "react";

const useTop5 = () => {
	const [status, setStatus] = React.useState("idle");
	const [data, setData] = React.useState([]);
	// const getQuery = "http://localhost:3001/top5";
	const getQuery = "http://52.79.54.151:8080/api/list";

	React.useEffect(() => {
		if (!getQuery) return;

		const fetchWithGet = async () => {
			setStatus("loading");
			try {
				const response = await fetch(getQuery);
				const data = await response.json();
				console.log(data);
				if (data.status === 200) {
					setStatus("success");
					setData(data);
				} else {
					console.log(data.status);
					setStatus("fetchedButFounderror");
				}
			} catch (error) {
				console.log(error);
				setStatus("error");
			}
		};

		fetchWithGet();
	}, [getQuery]);

	return [status, data.data];
};

export default useTop5;
