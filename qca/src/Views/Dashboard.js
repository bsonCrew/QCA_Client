import * as React from "react";
import SideBar from "../Components/layout/Sidebar";
import Footer from "../Components/layout/Footer";
import MainView from "./MainView";
import useLighthouse from "../hooks/useLighthouse";
import { Routes, Route, useParams } from "react-router-dom";

import CompatibilityView from "./CompatibilityView";
import AccessibilityView from "./AccessibilityView";
import ConnectivityView from "./ConnectivityView";
import OpennessView from "./OpennessView";

export default function Dashboard({ targetWebsite }) {
	let [status, data, classification] = useLighthouse(targetWebsite);
	const [
		accessibility,
		compatibility,
		connectivity,
		openness,
		enhancement,
		warning,
	] = status === "success" ? classification : [0, 0, 0, 0, 0, 0];

	console.log(status);
	console.log(classification);

	const openView = "/dashboard/" + useParams()["*"];

	return (
		<div className="flex flex-row flex-wrap h-full w-screen bg-main">
			<SideBar targetWebsite={targetWebsite} openView={openView} />
			<div className="flex-12 flex-col flex-wrap pt-8 bg-main">
				<div className="bg-white rounded-2xl px-24">
					<Routes>
						<Route
							path="/"
							element={<MainView data={data} status={status} />}
						/>
						<Route
							path="/compatibility"
							element={<CompatibilityView website={targetWebsite} />}
						/>
						<Route
							path="/accessibility"
							element={<AccessibilityView data={data} status={status} />}
						/>
						<Route
							path="/connectivity"
							element={<ConnectivityView data={data} status={status} />}
						/>
						<Route
							path="/openness"
							element={<OpennessView data={data} status={status} />}
						/>
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
}
