import * as React from "react";
import Stat from "../Components/Stat";
import Score from "../Components/Score";
import { StatCards } from "../Components/Cards";

export default function OpennessView(props) {
	const [solvedArr, setSolvedArr] = React.useState([]);
	console.log(solvedArr);

	return (
		<div className="my-12 pb-24 flex flex-row flex-wrap">
			<div className="flex-4 rounded-2xl ">
				<StatCards data={props.data} solvedArr={solvedArr} />
			</div>
			<div className="flex-3 min-h-screen flex pt-24 pb-8 flex-col rounded-2xl">
				<Score />
				<Stat data={props.data} />
			</div>
		</div>
	);
}
