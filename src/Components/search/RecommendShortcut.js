import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

import styled from "@emotion/styled";
import config from "../../config.json";

const LabelLink = styled(`div`)({
	marginTop: "2vh",
	color: "white",
	fontWeight: "bold",
});

const StyledFab = styled(Fab)({
	backgroundColor: config.colors.white,
	fontWeight: "bold",
});

const ShortCut = ({ label, homepage }) => {
	const AnimatedFab = animated(StyledFab);
	const styles = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		velocity: 0.25,
	});

	return (
		<div className="items-center justify-center w-36 mt-5 text-center">
			<Link
				to={{
					pathname: "/dashboard",
				}}
				state={{ targetWebsite: homepage }}

				// onClick={() => {
				// 	console.log(homepage);
				// }}
			>
				<AnimatedFab
					color="kblue"
					aria-label="add"
					style={styles}
					className="mx-16 font-bold"
				>
					{label?.slice(0, 1)}
				</AnimatedFab>
			</Link>
			<LabelLink>{label}</LabelLink>
		</div>
	);
};

export default ShortCut;
