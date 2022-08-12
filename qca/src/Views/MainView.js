import Stat from "../Components/Stat";
import Score from "../Components/Score";
import PolarChart from "../Components/chart/PolarChart";
import VeticalChart from "../Components/chart/VerticalChart";
import StatCards from "../Components/StatCards";

export default function MainView() {
	return (
		<>
			<div className="my-12 flex flex-row flex-wrap-reverse">
				<div className="flex-4 rounded-2xl ">
					<StatCards />
				</div>
				<div className="flex-3 rounded-2xl">
					<Score />
				</div>
			</div>
			<div className="my-12 flex flex-wrap justify-between">
				<PolarChart />
				<VeticalChart />
			</div>
			<div className="flex w-full h-full pb-24 overflow-hidden">
				<Stat />
			</div>
		</>
	);
}
