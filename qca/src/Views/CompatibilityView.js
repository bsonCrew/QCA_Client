import Stat from "../Components/Stat";
import Score from "../Components/Score";
import { StatCards } from "../Components/Cards";

export function CompatibilityView(props) {
	const columns = props.data.columns;
	return (
		<>
			<div className="my-12 pb-24 flex flex-row flex-wrap">
				<div className="flex-4 rounded-2xl ">
					<StatCards {...props} />
				</div>
				<div className="flex-3 min-h-screen flex pt-24 pb-8 flex-col rounded-2xl">
					<Score />
					<Stat data={props.data} />
				</div>
			</div>
		</>
	);
}
