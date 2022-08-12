import * as React from "react";
import Stat from "../Components/Stat";
import SideBar from "../Components/Sidebar";
import Score from "../Components/Score";
import PolarChart from "../Components/chart/PolarChart";
import VeticalChart from "../Components/chart/VerticalChart";
import StatCards from "../Components/StatCards";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";

export default function Dashboard() {
	const [open, setOpen] = React.useState(false);
	const [lock, setLock] = React.useState(false);

	const handleDrawer = () => {
		setOpen(!open);
		setLock(true);
	};

	const closeDrawer = () => {
		if (!lock && open) setOpen(false);
	};

	const openDrawer = () => {
		if (!lock) {
			setOpen(true);
		}
	};

	return (
		<div className="flex flex-row flex-wrap h-full w-screen bg-main">
			<div>
				<TopBar open={open} handleDrawer={handleDrawer} />
				<SideBar
					open={open}
					setOpen={setOpen}
					handleDrawer={handleDrawer}
					closeDrawer={closeDrawer}
					openDrawer={openDrawer}
					lock={lock}
				/>
			</div>
			<div className="flex-12 flex-col flex-wrap pt-16 bg-main">
				<div className="bg-white rounded-2xl px-24">
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
				</div>
			</div>
			<Footer />
		</div>
	);
}
