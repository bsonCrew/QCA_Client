import * as React from "react";
import config from "../config.json";
import Avatar from "@mui/material/Avatar";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ConstructionIcon from "@mui/icons-material/Construction";
import CheckIcon from "@mui/icons-material/Check";
import Tooltip from "@mui/material/Tooltip";
import CardDialog from "./CardDialog";

export function StatCard(props) {
	const icons = [
		<ThumbUpAltIcon fontSize="medium" />,
		<DangerousIcon fontSize="small" />,
		<AnnouncementIcon fontSize="small" />,
		<ConstructionIcon fontSize="small" />,
		<CheckIcon fontSize="small" />,
	];

	const [clicked, setClicked] = React.useState(false);

	return (
		<div className="lg:min-w-[280px] mx-4 my-4 grow transition-transform ease-in-out ">
			<Tooltip
				title={config.catchPhrase[props.iconIdx] || "No description"}
				placement="left"
				arrow
			>
				<Avatar
					sx={{ width: 36, height: 36, bgcolor: props.bgcolor }}
					className="-ml-5 -mr-8 z-2 -mb-6 hover:cursor-pointer"
				>
					{icons[props.iconIdx]}
				</Avatar>
			</Tooltip>
			<CardDialog
				{...props}
				open={clicked}
				handleClick={() => setClicked(false)}
			>
				<div className="w-80 h-96"></div>
			</CardDialog>
			<div
				role="button"
				className={
					"h-24 rounded-lg shadow-lg hover:shadow-2xl text-center flex justify-center flex-col p-4 px-8 " +
					(clicked ? "bg-mildRed " : null)
				}
				onClick={() => setClicked(!clicked)}
			>
				<span className="text-xl">{props.title}</span>
				<span className="text-sm font-bold text-gray">{props.subheader}</span>
			</div>
		</div>
	);
}

export function StatCards(props) {
	const cardColumns = props.data.columns;
	const cardRows = props.data.rows;

	return (
		<div className="flex flex-col justify-center">
			<span className="mt-8 text-2xl font-bold">지금 누리집은</span>
			<div className="mt-4 mx-4 flex flex-row flex-wrap justify-between">
				{cardColumns.map((data, index) => {
					return (
						// <div
						// 	key={index}
						// 	className="max-w-[320px] min-w-[180px] flex-wrap mx-4 my-4 justify-center"
						// >
						<StatCard
							title={cardColumns[index].field}
							iconIdx={index}
							subheader={cardRows[0][cardColumns[index].field].toString()}
							bgcolor={config.warningcolors[index]}
							key={index}
						/>
						// </div>
					);
				})}
			</div>
		</div>
	);
}

export default function MainCards(props) {
	let cardData = Array(4).fill(0);

	return (
		<div className="flex flex-col justify-center">
			<span className="mt-8 text-2xl font-bold">지금 누리집은</span>
			<div className="mt-4 mx-4 flex flex-row flex-wrap justify-between">
				{cardData.map((data, index) => {
					return (
						<div
							key={index}
							className="max-w-[400px] min-w-[180px] w-5/12 flex-wrap mx-7 my-4"
						>
							<StatCard
								title={config.catchPhrase[index]}
								iconIdx={index}
								subheader={config.subheaderPhrase[index]}
								bgcolor={config.warningcolors[index]}
								key={index}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
