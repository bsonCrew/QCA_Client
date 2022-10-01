import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Fab from "@mui/material/Fab";

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
			state: { targetWebsite: homepage },
		});
	};

	return (
		<div className="items-center justify-center w-36 mt-5 text-center">
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

export default ShortCut;
