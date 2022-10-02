import * as React from "react";

import Button from "@mui/material/Button";
import ScoreCardModal from "./ScoreCardModal";
import Skeleton from "@mui/material/Skeleton";

import BeautifulBar from "../layout/BeautifulBar";

export default function ScoreCard({ score, status }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="max-w-full">
			<ScoreCardModal
				open={open}
				handleClose={handleClose}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="w-full h-full flex justify-center items-center"
			/>
			<BeautifulBar height={3} flatBottom={true} reverse={true} />

			{status === "success" ? (
				<div
					role="button"
					className="min-w-[280px] h-64 rounded-b-xl shadow-lg hover:shadow-2xl flex flex-col p-4 px-24 item-middle align-middle justify-center"
					onClick={handleOpen}
				>
					<span className="text-xl">총점</span>
					<div className="flex justify-center">
						<span className="min-w-[300px] text-center text-7xl">
							{score} / 100
						</span>
					</div>

					<span className="pt-4 flex justify-end">
						<Button size="small">점수란?</Button>
					</span>
				</div>
			) : (
				<Skeleton variant="rounded" height={270} />
			)}
		</div>
	);
}
