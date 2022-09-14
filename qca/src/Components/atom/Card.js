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

	const findAudit = auditId => {
		const auditObj = audits.audits[auditId];
		let className = "";
		switch (auditObj.class) {
			case "accessibility":
				className = "접근성";
				break;
			case "connectivity":
				className = "접속성";
				break;
			case "compatibility":
				className = "호환성";
				break;
			case "openness":
				className = "개방성";
				break;
			default:
				className = "";
		}
		return [className, auditObj.subClass, auditObj.spec, props.id].join(" > ");
	};

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
				<div className="mt-1">
					<span className="text-lg font-bold text-blue mt-1">
						{findAudit(props.id)}
					</span>
				</div>
				<div className="mt-4">
					<span className="text-xl pt-4 leading-8">{props.subheader}</span>
				</div>
				<div className="mt-8">{linkify(description, [])}</div>

				<p className="text-lg pt-4"></p>
			</div>
		</Dialog>
	);
}

export default function Card(props) {
	const [iconIdx, setIconIdx] = React.useState(0);
	const [clicked, setClicked] = React.useState(false);
	const handleClose = () => setClicked(false);

	React.useEffect(() => {
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

	return (
		<div className="w-3/12 min-w-[200px] max-w-sm mx-6 my-6 grow transition-transform ease-in-out ">
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
