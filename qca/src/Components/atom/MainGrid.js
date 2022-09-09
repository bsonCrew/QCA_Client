import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import styled from "@emotion/styled";
import config from "../../config.json";
import MainModal from "./MainModal";

const BeautifulBar = styled(`div`)({
	width: "100%",
	height: "100%",
	backgroundImage: `linear-gradient(143deg, ${config.gradientcolor[0]}, ${config.gradientcolor[1]} 71.71%)`,
});

export default function MainGrid({ data, status }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	let cardData = Array(4).fill(0);

	const Display = () => {
		return (
			<>
				<div className="w-full h-64  shadow-lg rounded-b-xl hover:shadow-2xl bg-blue">
					<div>fish</div>
				</div>
			</>
		);
	};

	return (
		<div className="flex flex-col justify-center pt-8">
			<div className="w-full h-9">
				<span className="text-2xl font-bold">지금 누리집은</span>
			</div>
			<div className="max-w-full pr-4 mt-11 ">
				<MainModal
					open={open}
					handleClose={handleClose}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					className="w-full h-full flex justify-center items-center"
				/>
				<div className="w-full h-8">
					<BeautifulBar className="rounded-t-xl" />
				</div>
				<>
					{status === "success" ? (
						<div
							role="button"
							className="min-w-[280px] h-64 rounded-b-xl shadow-lg hover:shadow-2xl flex flex-col p-4 px-8 item-middle align-middle justify-center"
							onClick={handleOpen}
						></div>
					) : (
						<Skeleton variant="rounded" height={270} />
					)}
				</>
			</div>
		</div>
	);
}
