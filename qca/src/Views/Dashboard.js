import * as React from "react";
import SideBar from "../Components/layout/Sidebar";
import TopBar from "../Components/layout/TopBar";
import Footer from "../Components/layout/Footer";
import MainView from "./MainView";
import useLighthouse from "../hooks/useLighthouse";
import { Routes, Route, useParams } from "react-router-dom";

import CompatibilityView from "./CompatibilityView";
import AccessibilityView from "./AccessibilityView";
import ConnectivityView from "./ConnectivityView";
import OpennessView from "./OpennessView";

export default function Dashboard() {
	const [status, data] = useLighthouse();

	const openView = useParams()["*"];

	return (
		<div className="flex flex-row flex-wrap h-full w-screen bg-main">
			<div>
				<SideBar openView={openView} />
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
						<Route
							path="/accessibility"
							element={<AccessibilityView data={data} />}
						/>
						<Route
							path="/connectivity"
							element={<ConnectivityView data={data} />}
						/>
						<Route path="/openness" element={<OpennessView data={data} />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
}
