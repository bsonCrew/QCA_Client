import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated as a } from "react-spring";

const Animation = () => {
	const [greetingStatus, displayGreeting] = React.useState(false);
	const contentProps = useSpring({
		opacity: greetingStatus ? 1 : 0,
		marginTop: greetingStatus ? 0 : -500,
	});
	return (
		<div className="container">
			<div className="button-container">
				<button onClick={() => displayGreeting(a => !a)} className="button">
					Click Here
				</button>
			</div>
			{!greetingStatus ? (
				<div className="Intro">Click button below</div>
			) : (
				<a.div className="box" style={contentProps}>
					<h1>Hey there ! React Spring is awesome.</h1>
				</a.div>
			)}
		</div>
	);
};

export default Animation;
