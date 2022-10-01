import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import ExplanationModal from "./ExplanationModal";
import config from "../../config.json";
import BeautifulBar from "../layout/BeautifulBar";

export default function ExplanationCard({
	targetWebsite,
	targetWebsiteScore,
	status,
}) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const catchPhrase = score => {
		if (score > 80) return config.scorePhrase[0];
		else if (score > 60) return config.scorePhrase[1];
		else if (score > 40) return config.scorePhrase[2];
		else if (score > 20) return config.scorePhrase[3];
		else return config.scorePhrase[4];
	};

	const Display = () => {
		return (
			<div className="w-full leading-4">
				<span className="text-4xl font-semibold">
					{catchPhrase(targetWebsiteScore[6])}
				</span>
				<br />
				<br />
				<span className="text-lg leading-8">{`${targetWebsite}의 총점은 ${Math.floor(
					targetWebsiteScore[6]
				)}점입니다.`}</span>
				<br />
				<span className="text-lg leading-8">
					<b>{config.evaluation[0]}</b> 점수는 <b>{targetWebsiteScore[0]}점</b>,{" "}
					<b>{config.evaluation[1]}</b> 점수는 <b>{targetWebsiteScore[1]}점</b>,{" "}
					<b>{config.evaluation[2]}</b> 점수는 <b>{targetWebsiteScore[2]}점</b>,{" "}
					<b>{config.evaluation[3]}</b> 점수는 <b>{targetWebsiteScore[3]}점</b>
					입니다.
				</span>
			</div>
		);
	};

	return (
		<div className="flex flex-col justify-center">
			<div className="max-w-full pr-4">
				<ExplanationModal
					open={open}
					handleClose={handleClose}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					className="w-full h-full flex justify-center items-center"
				/>
				<BeautifulBar height={3} flatBottom={true} />
				{status === "success" ? (
					<div
						role="button"
						className="h-64 rounded-b-xl shadow-lg hover:shadow-2xl flex flex-col p-14 px-16 justify-center"
						onClick={handleOpen}
					>
						<Display />
					</div>
				) : (
					<Skeleton variant="rounded" height={270} />
				)}
			</div>
		</div>
	);
}
