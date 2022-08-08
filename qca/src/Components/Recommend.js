import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import data from "../file.json";
import { useSpring, animated } from "react-spring";

let top5 = data.websites.slice(1, 6);

const ShortCut = props => {
	const styles = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		velocity: 0.25,
	});

	const AnimatedFab = animated(Fab);

	return (
		<div className="items-center justify-center m-5 text-center">
			<AnimatedFab
				color="kblue"
				aria-label="add"
				style={styles}
				className="mx-16 font-bold"
			>
				{props.name.slice(0, 1)}
			</AnimatedFab>
			<p className="mt-4">{props.name}</p>
		</div>
	);
};

export default function Recommend() {
	return (
		<div className="w-[max(40vw,20rem)] mt-4 flex-wrap flex items-center justify-center flex-row">
			{top5.map(el => {
				return <ShortCut key={el.homepage} name={el.label} />;
			})}
		</div>
	);
}
