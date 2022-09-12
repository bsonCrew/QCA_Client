import * as React from "react";
import Fab from "@mui/material/Fab";
import { useSpring, animated } from "react-spring";
import useTop5 from "../../hooks/useTop5";
import { useNavigate } from "react-router-dom";

const ShortCut = ({ label, homepage }) => {
	const AnimatedFab = animated(Fab);
	const styles = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		velocity: 0.25,
	});
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/dashboard", {
			// state: { targetWebsite: homepage, data: },
		});
	};

	return (
		<div className="items-center justify-center m-5 text-center">
			<AnimatedFab
				color="kblue"
				aria-label="add"
				style={styles}
				className="mx-16 font-bold"
				onClick={handleClick}
			>
				{label.slice(0, 1)}
			</AnimatedFab>
			<p className="mt-4">{label}</p>
		</div>
	);
};

export default function Recommend() {
	const [status, data] = useTop5();
	console.log(data);

	return (
		<div className="w-[max(40vw,20rem)] mt-4 flex-wrap flex items-center justify-center flex-row">
			{status === "success"
				? data.map(el => (
						<ShortCut
							key={el.homepage}
							label={el.label}
							homepage={el.homepage}
						/>
				  ))
				: null}
		</div>
	);
}
