import * as React from "react";
import Stat from "../Components/Stat";
import SideBar from "../Components/Sidebar";
import Score from "../Components/Score";
import PolarChart from "../Components/chart/PolarChart";
import VeticalChart from "../Components/chart/VerticalChart";
import StatCards from "../Components/StatCards";
import Divider from "@mui/material/Divider";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function Dashboard() {
	return (
		<div className="flex flex-row flex-wrap h-screen w-screen">
			<div className="flex-2 mx-2">
				<SideBar />
			</div>
			<Divider orientation="vertical" />
			<div className="flex-10 flex-col flex-wrap">
				<div className="flex flex-row">
					<div className="flex-7">
						<StatCards />
					</div>
					<div className="flex-3">
						<Score />
					</div>
				</div>
				<div className="flex flex-wrap ml-4 justify-between">
					<PolarChart />
					<VeticalChart />
				</div>
				<div className="flex ml-6 w-full">
					<Stat />
				</div>
			</div>
		</div>
	);
}
