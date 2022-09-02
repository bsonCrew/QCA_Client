import Stat from "../Components/atom/Stat";
import Score from "../Components/atom/Score";
import PolarChart from "../Components/chart/PolarChart";
import VeticalChart from "../Components/chart/VerticalChart";
import MainCards from "../Components/atom/Cards";

export default function MainView({ data, status }) {
	return (
		<>
			<div className="my-12 flex flex-row flex-wrap-reverse">
				<div className="flex-4 rounded-2xl ">
					<MainCards data={data} status={status} />
				</div>
				<div className="mt-28 flex-3 rounded-2xl">
					<Score status={status} />
				</div>
			</div>
			<div className="my-12 flex flex-wrap justify-between">
				<PolarChart />
				<VeticalChart />
			</div>
			<div className="flex w-full h-full pb-24 overflow-hidden">
				<Stat data={data} />
			</div>
		</>
	);
}
