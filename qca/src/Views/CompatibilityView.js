import * as React from "react";
import Stat from "../Components/Stat";
import Score from "../Components/Score";
import { StatCards } from "../Components/Cards";

export function CompatibilityView(props) {
	const [solvedArr, setSolvedArr] = React.useState([]);

	const handleSelectedItems = items => {
		setSolvedArr(items);
	};

	return (
		<>
			<div className="my-12 pb-24 flex flex-row flex-wrap">
				<div className="flex-4 rounded-2xl ">
					<StatCards
						data={props.data}
						solvedArr={solvedArr}
						handleSelectedItems={handleSelectedItems}
					/>
				</div>
				<div className="flex-3 min-h-screen flex pt-24 pb-8 flex-col rounded-2xl">
					<Score />
					<Stat data={props.data} handleSelectedItems={handleSelectedItems} />
				</div>
			</div>
		</>
	);
}
