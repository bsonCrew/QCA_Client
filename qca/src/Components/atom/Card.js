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
import audits from "../../audits.json";

// import CardDialog from "./CardDialog";

function CardDialog(props) {
	let description = props.description?.replace(props.subheader, "");

	const findAudit = auditName => {
		const auditObj = audits.audits[auditName];
		const specDesc =
			audits.auditMappings[auditObj.class][auditObj.subClass][auditObj.spec]
				.title;
		console.log(auditObj.class, auditObj.subClass, specDesc);
	};
	console.log(findAudit(props.id));

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
				<span className="text-lg font-bold text-blue mt-1">id: {props.id}</span>
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
	const [iconIdx, setIconIdx] = React.useState(0);

	React.useEffect(() => {
		// console.log(props);
		if (props.calcFunctionType === 1) {
			setIconIdx(3);
		} else if (props.calcFunctionType === 2) {
			setIconIdx(1);
		} else if (props.resultScore > props.totalScore / 2 || props.score === 1) {
			setIconIdx(0);
		} else {
			setIconIdx(2);
		}
	}, [props.calcFunctionType, props.resultScore, props.totalScore]);

	const icons = [
		<ThumbUpAltIcon fontSize="medium" />, // 잘했어요
		<DangerousIcon fontSize="small" />, // 위험해요
		<ConstructionIcon fontSize="small" />, // 아쉬워요
		<AnnouncementIcon fontSize="small" />, // 개선해봅시다
		<CheckIcon fontSize="small" />,
	];

	const bgcolors = config.warningcolors;

	const [clicked, setClicked] = React.useState(false);
	const handleClose = () => setClicked(false);

	return (
		<div className="w-3/12 max-w-sm mx-4 my-6 grow transition-transform ease-in-out ">
			<Tooltip
				title={config.catchPhrase[iconIdx] || "No description"}
				placement="left"
				arrow
			>
				<Avatar
					sx={{
						width: 36,
						height: 36,
						zIndex: 2,
						bgcolor: bgcolors[iconIdx],
					}}
					className="-ml-4 -mr-8 z-2 -mb-6 hover:cursor-pointer"
				>
					{icons[iconIdx]}
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
							"h-36 rounded-lg shadow-lg hover:shadow-2xl text-center flex flex-col justify-center p-4 py-7 px-8" +
							(clicked ? "bg-mildRed " : " bg-white")
						}
						onClick={() => setClicked(!clicked)}
					>
						<span className="text-lg">{props.title}</span>
						<span className="text-sm font-bold text-blue">
							{props.subheader.slice(0, 18) + " ..."}
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
