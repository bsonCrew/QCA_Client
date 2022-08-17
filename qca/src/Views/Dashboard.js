import * as React from "react";
import SideBar from "../Components/Sidebar";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import MainView from "./MainView";
import { CompatibilityView } from "./CompatibilityView";
import useLighthouse from "../hooks/useLighthouse";
import { Routes, Route, useParams } from "react-router-dom";

import sampeData from "../sampleData.json";

export default function Dashboard() {
	const [sideBarOpen, setSideBarOpen] = React.useState(false);
	const [lock, setLock] = React.useState(false);
	// const [status, data] = useLighthouse();
	const data = sampeData;

	const openView = useParams()["*"];

	const handleDrawer = () => {
		setSideBarOpen(!sideBarOpen);
		setLock(true);
	};

	const closeDrawer = () => {
		if (!lock && sideBarOpen) setSideBarOpen(false);
	};

	const openDrawer = () => {
		if (!lock) {
			setSideBarOpen(true);
		}
	};

	return (
		<div className="flex flex-row flex-wrap h-full w-screen bg-main">
			<div>
				<TopBar open={sideBarOpen} handleDrawer={handleDrawer} />
				<SideBar
					sideBarOpen={sideBarOpen}
					setOpen={setSideBarOpen}
					handleDrawer={handleDrawer}
					closeDrawer={closeDrawer}
					openDrawer={openDrawer}
					lock={lock}
					openView={openView}
				/>
			</div>
			<div className="flex-12 flex-col flex-wrap pt-8 bg-main">
				<div className="bg-white rounded-2xl px-24">
					<Routes>
						<Route path="/" element={<MainView data={data} />} />
						<Route path="/main" element={<MainView data={data} />} />
						<Route
							path="/compatibility"
							element={<CompatibilityView data={data} />}
						/>
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
}
