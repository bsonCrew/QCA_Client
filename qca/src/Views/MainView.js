import Stat from "../Components/Stat";
import Score from "../Components/Score";
import PolarChart from "../Components/chart/PolarChart";
import VeticalChart from "../Components/chart/VerticalChart";
import MainCards from "../Components/Cards";

export default function MainView(props) {
	return (
		<>
			<div className="my-12 flex flex-row flex-wrap-reverse">
				<div className="flex-4 rounded-2xl ">
					<MainCards />
				</div>
				<div className="mt-32 flex-3 rounded-2xl">
					<Score />
				</div>
			</div>
			<div className="my-12 flex flex-wrap justify-between">
				<PolarChart />
				<VeticalChart />
			</div>
			<div className="flex w-full h-full pb-24 overflow-hidden">
				<Stat {...props} />
			</div>
		</>
	);
}
