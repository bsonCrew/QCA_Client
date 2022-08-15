import * as React from "react";
import config from "../config.json";
import Avatar from "@mui/material/Avatar";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ConstructionIcon from "@mui/icons-material/Construction";

export function StatCard(props) {
	const icons = [
		<ThumbUpAltIcon fontSize="medium" />,
		<DangerousIcon fontSize="small" />,
		<AnnouncementIcon fontSize="small" />,
		<ConstructionIcon fontSize="small" />,
	];
	return (
		<>
			<Avatar
				sx={{ width: 36, height: 36, bgcolor: props.bgcolor }}
				className="-ml-5 z-2 -mb-6"
			>
				{icons[props.iconIdx]}
			</Avatar>
			<div
				role="button"
				className="h-24 rounded-lg shadow-lg hover:shadow-2xl text-center flex justify-center flex-col p-4 px-8"
			>
				<span className="text-xl">{props.title}</span>
				<span className="text-sm font-bold text-gray">{props.subheader}</span>
			</div>
		</>
	);
}

export function StatCards(props) {
	let cardColumns = props.data.columns;
	let cardRows = props.data.rows;
	console.log(props.data.columns);
	console.log(props.data.rows);

	return (
		<div className="flex flex-col justify-center">
			<span className="mt-8 text-2xl font-bold">지금 누리집은</span>
			<div className="mt-4 mx-4 flex flex-row flex-wrap justify-between">
				{cardColumns.map((data, index) => {
					return (
						<div
							key={index}
							className="max-w-[300px] min-w-[180px] w-5/12 flex-wrap mx-4 my-4 justify-center"
						>
							<StatCard
								title={cardColumns[index].field}
								iconIdx={index}
								subheader={cardRows[0][cardColumns[index].field].toString()}
								bgcolor={config.warningcolors[index]}
							/>
						</div>
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
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
