import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import ConstructionIcon from "@mui/icons-material/Construction";
import config from "../config.json";

const icons = [
	<ThumbUpAltIcon fontSize="large" />,
	<DangerousIcon fontSize="large" />,
	<AnnouncementIcon fontSize="large" />,
	<ConstructionIcon fontSize="large" />,
];

const StatCard = ({ data, index }) => {
	return (
		<Box key={index} className="w-3/12 h-full ">
			<Card>
				<CardContent className="flex flex-col text-center item-center justify-center">
					<div className="flex align-middle justify-center my-4">
						{icons[index]}
					</div>
					<Typography variant="h6" component="h2">
						{index}
					</Typography>
					<Typography gutterBottom variant="h6" component="div">
						{catchPhrase[index]}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

const catchPhrase = config.catchPhrase;

export default function StatCards(props) {
	console.log(catchPhrase);
	return (
		<div className="flex flex-row">
			{props.cardData.map((data, index) => {
				return <StatCard data={data} index={index} />;
			})}
		</div>
	);
}
