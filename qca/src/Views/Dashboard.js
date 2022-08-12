import * as React from "react";
import Stat from "../Components/Stat";
import SideBar from "../Components/Sidebar";
import Score from "../Components/Score";
import PolarChart from "../Components/chart/PolarChart";
import VeticalChart from "../Components/chart/VerticalChart";
import StatCards from "../Components/StatCards";

export default function Dashboard() {
	return (
		<div className="flex flex-row flex-wrap h-screen w-screen">
			<SideBar />
			<div className="flex-12 flex-col flex-wrap pt-16">
				<div className="flex flex-row">
					<div className="flex-8">
						<StatCards />
					</div>
					<div className="flex-2">
						<Score />
					</div>
				</div>
				<div className="px-6 flex flex-wrap justify-between">
					<PolarChart />
					<VeticalChart />
				</div>
				<div className="px-6 flex w-full">
					<Stat />
				</div>
			</div>
		</div>
	);
}
