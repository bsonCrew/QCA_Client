import * as React from "react";
import config from "../../config.json";
import Avatar from "@mui/material/Avatar";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ConstructionIcon from "@mui/icons-material/Construction";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import linkify from "../utils/linkify";
import Skeleton from "@mui/material/Skeleton";

// import CardDialog from "./CardDialog";

function CardDialog(props) {
	let description = props.description?.replace(props.subheader, "");

	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			fullWidth
			maxWidth="lg"
		>
			<div className="w-fit h-96 p-12">
				<span className="text-3xl font-bold">{props.title}</span>
				<br />
				<span className="text-lg font-bold text-blue">id: {props.id}</span>
				<br />
				<br />
				<span className="text-xl pt-4 leading-8">{props.subheader}</span>
				<br />
				<br />
				{linkify(description, [])}
				<br />

				<p className="text-lg pt-4"></p>
			</div>
		</Dialog>
	);
}

export default function Card(props) {
	const icons = [
		<ThumbUpAltIcon fontSize="medium" />,
		<DangerousIcon fontSize="small" />,
		<ConstructionIcon fontSize="small" />,
		<AnnouncementIcon fontSize="small" />,
		<CheckIcon fontSize="small" />,
	];

	const bgcolors = config.warningcolors;

	const [clicked, setClicked] = React.useState(false);
	const handleClose = () => setClicked(false);

	return (
		<div className="w-5/12 mx-4 my-4 grow transition-transform ease-in-out ">
			<Tooltip
				title={config.catchPhrase[props.iconIdx] || "No description"}
				placement="left"
				arrow
			>
				<Avatar
					sx={{
						width: 36,
						height: 36,
						zIndex: 2,
						bgcolor: bgcolors[props.iconIdx],
					}}
					className="-ml-4 -mr-8 z-2 -mb-6 hover:cursor-pointer"
				>
					{icons[props.iconIdx]}
				</Avatar>
			</Tooltip>
			<CardDialog
				{...props}
				open={clicked}
				handleClose={handleClose}
				onClose={handleClose}
			>
				<div className="w-80 h-96"></div>
			</CardDialog>
			{props.status === "success" ? (
				<>
					<div
						role="button"
						className={
							"w-full h-32 rounded-lg shadow-lg hover:shadow-2xl text-center flex justify-center flex-col p-4 px-8 " +
							(clicked ? "bg-mildRed " : null)
						}
						onClick={() => setClicked(!clicked)}
					>
						<span className="text-lg">{props.title}</span>
						<span className="text-sm font-bold text-gray">
							{props.subheader.slice(0, 28) + "..."}
						</span>
					</div>
				</>
			) : (
				<Skeleton
					sx={{ width: "100%", height: 128, bgcolor: "grey.300" }}
					variant="rounded"
				/>
			)}
		</div>
	);
}
