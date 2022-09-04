import * as React from "react";
import Stat from "../Components/atom/Stat";
import Score from "../Components/atom/Score";
import { StatCards } from "../Components/atom/Cards";

export default function OpennessView({ data, status }) {
	const [solvedArr, setSolvedArr] = React.useState([]);

	return (
		<div className="my-10 flex flex-row flex-wrap">
			<div className="flex-4 rounded-2xl ">
				<StatCards status={status} data={data} solvedArr={solvedArr} />
			</div>
			<div className="flex-3 min-h-screen flex mt-28 flex-col rounded-2xl">
				<Score status={status} />
				<Stat status={status} data={data} />
			</div>
		</div>
	);
}
