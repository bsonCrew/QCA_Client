import React from "react";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "react-spring";

function Animation2() {
	const props = useSpring({
		opacity: 1,
		from: { opacity: 0 },
	});
	const AnimatedTypography = animated(Typography);

	return (
		<div className="App">
			<Typography variant="h2">
				<animated.div style={props}>Example</animated.div>
			</Typography>
			<AnimatedTypography variant="h2" style={props}>
				Example
			</AnimatedTypography>
		</div>
	);
}

export default Animation2;
