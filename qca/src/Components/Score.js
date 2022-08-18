import * as React from "react";

import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import config from "../config.json";
import Box from "@mui/material/Box";
import ClickModal from "./ClickModal";

const BeautifulBar = styled(`div`)({
	width: "100%",
	height: "100%",
	backgroundImage: `linear-gradient(217deg, ${config.gradientcolor[0]}, ${config.gradientcolor[1]} 71.71%)`,
});

export default function Score() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="max-w-full mx-6">
			<ClickModal
				open={open}
				handleClose={handleClose}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				className="w-full h-full flex justify-center items-center"
			/>
			<div className="w-full h-6">
				<BeautifulBar className="rounded-t-xl" />
			</div>

			<div
				role="button"
				className="min-w-[280px] h-56 rounded-lg shadow-lg hover:shadow-2xl flex flex-col p-4 px-8 item-middle align-middle justify-center"
				onClick={handleOpen}
			>
				<span className="text-xl">총점</span>
				<div className="flex justify-center">
					<span className="min-w-[300px] text-center text-7xl">89 / 100</span>
				</div>

				<span className="pt-4 flex justify-end">
					<Button size="small">점수란?</Button>
				</span>
			</div>
		</div>
	);
}
