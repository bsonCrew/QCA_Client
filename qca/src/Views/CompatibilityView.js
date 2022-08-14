import Stat from "../Components/Stat";
import Score from "../Components/Score";
import { StatCards } from "../Components/Cards";

export function CompatibilityView(props) {
	const columns = props.data.columns;
	return (
		<>
			<div className="my-12 flex flex-row flex-wrap-reverse">
				<div className="flex-4 rounded-2xl ">
					<StatCards {...props} />
				</div>
				<div className="flex-3 rounded-2xl">
					<Score />
				</div>
			</div>
			<div className="flex w-full h-screen pb-24 overflow-hidden">
				<Stat data={props.data} />
			</div>
		</>
	);
}
