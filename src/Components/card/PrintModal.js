import Dialog from "@mui/material/Dialog";
import React from "react";
import { CSVLink } from "react-csv";
import useQualification from "../../Hooks/useQualification";

import config from "../../config.json";

export function DownloadCSV() {
	const data = [
		{ firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
		{ firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
		{ firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
	];

	const headers = [
		{ label: "First Name", key: "firstname" },
		{ label: "Last Name", key: "lastname" },
		{ label: "Email", key: "email" },
	];

	const filename = "QCA 결과파일";

	return (
		<CSVLink filename={filename} data={data} headers={headers}>
			미리보기
		</CSVLink>
	);
}

const dfs = data => {
	const stack = [];
	const evaluation = config.evaluation;

	for (let i = 0; i < data.length; i++) {
		Object.entries(data[i])
			.filter(x => x[0] !== "resultScore" && x[0] !== "totalScore")
			.forEach(([subClassKey, subClassVal]) => {
				console.log(subClassKey, subClassVal);
				Object.entries(subClassVal)
					.filter(x => x[0] !== "resultScore" && x[0] !== "totalScore")
					.forEach(([specKey, specVal]) => {
						console.log(specKey, specVal);
						stack.push([
							evaluation[i],
							subClassKey,
							specKey,
							specVal.totalScore,
							specVal.resultScore,
						]);
					});
			});
	}

	console.log(stack);

	return stack;
};

export default function PrintModal({ data, open, handleClose, targetWebsite }) {
	let [status, lighthouseData, classification, robot] =
		useQualification(targetWebsite);

	// dfs(classification);
	console.log(classification);

	React.useEffect(() => {
		if (classification.length) dfs(classification);
	}, [classification]);

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			fullWidth
			maxWidth="lg"
		>
			<div className="w-fit h-100 p-12">
				<span className="text-xl font-bold">
					<DownloadCSV />
					{console.log(classification)}
					{/* {classification.map(_class => {})} */}
				</span>
			</div>
		</Dialog>
	);
}
