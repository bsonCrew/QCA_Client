import * as React from "react";
import Stat from "../Components/atom/Stat";
import Score from "../Components/atom/Score";
import { StatCards } from "../Components/atom/Cards";
import useLighthouse from "../hooks/useLighthouse";

export default function CompatibilityView({
	data,
	status,
	website,
	compatibility,
}) {
	// export default function CompatibilityView({ compatibility, data, status }) {
	const [solvedArr, setSolvedArr] = React.useState([]);
	// let [status, data, classification] = useLighthouse(website);

	return (
		<div className="my-10 pb-24 flex flex-row flex-wrap">
			<div className="flex-4 rounded-2xl ">
				<StatCards
					classificationData={compatibility}
					status={status}
					data={data}
					solvedArr={solvedArr}
				/>
			</div>
			<div className="flex-3 min-h-screen flex mt-28 flex-col rounded-2xl">
				<Score status={status} />
				<Stat status={status} data={data} />
			</div>
		</div>
	);
}
