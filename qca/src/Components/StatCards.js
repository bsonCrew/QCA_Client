import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ConstructionIcon from "@mui/icons-material/Construction";
import { NewCard } from "../Themes/NewCard";
import config from "../config.json";

const icons = [
	<ThumbUpAltIcon fontSize="large" />,
	<DangerousIcon fontSize="large" />,
	<AnnouncementIcon fontSize="large" />,
	<ConstructionIcon fontSize="large" />,
];

const colors = ["bg-green", "bg-red", "bg-yellow", "bg-blue", "bg-gray"];

const StatCard = ({ data, index }) => {
	const cardColor =
		"min-w-[10rem] h-full flex flex-row text-center item-center justify-center " +
		colors[index];
	return (
		<Box key={index} className="flex flex-wrap w-full mx-4">
			<NewCard className="w-full min-w-fit h-32">
				<CardContent className={cardColor}>
					<Typography variant="h1">{index}</Typography>
					<div className="flex align-middle justify-center">{icons[index]}</div>
					<Typography gutterBottom variant="h6" component="div">
						{catchPhrase[index]}
					</Typography>
				</CardContent>
			</NewCard>
		</Box>
	);
};

const catchPhrase = config.catchPhrase;

export default function StatCards(props) {
	let cardData = Array(4).fill(0);
	return (
		<div className="flex flex-row mt-4">
			{cardData.map((data, index) => {
				return <StatCard key={index} data={data} index={index} />;
			})}
		</div>
	);
}
