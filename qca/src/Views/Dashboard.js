import * as React from "react";
import SideBar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import MainView from "./MainView";
import { CompatibilityView } from "./CompatibilityView";

export default function Dashboard() {
	const [open, setOpen] = React.useState(false);
	const [lock, setLock] = React.useState(false);
	const [viewOn, setViewOn] = React.useState([1, 0, 0, 0, 0]);

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

	const handleViewOn = view => {
		let newViewOn = [...viewOn];
		newViewOn[view] = 1 - newViewOn[view];
		setViewOn(newViewOn);
		console.log(viewOn);
	};

	const views = [<MainView key={10} />, <CompatibilityView key={11} />];

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
					handleViewOn={handleViewOn}
					viewOn={viewOn}
				/>
			</div>
			<div className="flex-12 flex-col flex-wrap pt-8 bg-main">
				<div className="bg-white rounded-2xl px-24">
					{viewOn.map((v, idx) => {
						if (v === 1) {
							console.log(v, idx);
							return views[idx];
						} else return null;
					})}
					{/* {views[0]} */}
				</div>
			</div>
			<Footer />
		</div>
	);
}
