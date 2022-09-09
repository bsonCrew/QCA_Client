import Stat from "../Components/atom/Stat";
import Score from "../Components/atom/Score";
import PolarChart from "../Components/chart/PolarChart";
import VeticalChart from "../Components/chart/VerticalChart";
import MainGrid from "../Components/atom/MainGrid";
import StepGrid from "../Components/atom/StepGrid";

export default function MainView({ classification, data, status }) {
	return (
		<>
			<div className="my-10 flex flex-row flex-wrap-reverse">
				<StepGrid classification={classification} data={data} status={status} />

				<div className="flex-4 rounded-2xl ">
					<MainGrid data={data} status={status} />
				</div>
				<div className="mt-28 flex-3 rounded-2xl">
					<Score status={status} />
				</div>
			</div>
			<div className="my-12 flex flex-wrap justify-between">
				<PolarChart status={status} />
				<VeticalChart status={status} />
			</div>
			<div className="flex w-full h-full pb-24 overflow-hidden">
				<Stat status={status} data={data} />
			</div>
		</>
	);
}
