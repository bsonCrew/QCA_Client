import * as React from "react";
import Stat from "../Components/Stat";
import SideBar from "../Components/Sidebar";
import Score from "../Components/Score";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function Dashboard() {
	return (
		<div className="h-full w-screen flex flex-row">
			<SideBar />
			<div className="w-screen h-full flex flex-col">
				<Stat />
			</div>
			<Score />
		</div>
	);
}
