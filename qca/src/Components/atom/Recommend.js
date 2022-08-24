import * as React from "react";
import Fab from "@mui/material/Fab";
import data from "../../file.json";
import { useSpring, animated } from "react-spring";
import useTop5 from "../../hooks/useTop5";

const ShortCut = props => {
	const AnimatedFab = animated(Fab);
	const styles = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		velocity: 0.25,
	});

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
	const [status, data] = useTop5();

	console.log(data);
	console.log(status);

	return (
		<div className="w-[max(40vw,20rem)] mt-4 flex-wrap flex items-center justify-center flex-row">
			{status === "success"
				? data.map(el => <ShortCut key={el.homepage} name={el.label} />)
				: null}
		</div>
	);
}
