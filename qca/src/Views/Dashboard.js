import * as React from "react";
import SideBar from "../Components/layout/Sidebar";
import Footer from "../Components/layout/Footer";
import MainView from "./MainView";
import useLighthouse from "../hooks/useLighthouse";
import { Routes, Route, useParams, useLocation } from "react-router-dom";

import SpecificView from "./SpecificView";
import AccessibilityView from "./AccessibilityView";
import ConnectivityView from "./ConnectivityView";
import OpennessView from "./OpennessView";

export default function Dashboard() {
	const location = useLocation();
	const [targetWebsite, setTargetWebsite] = React.useState(
		location.state?.targetWebsite || localStorage.getItem("targetWebsite") || ""
	);
	let [status, lighthouseData, classification] = useLighthouse(targetWebsite);
	const [classValues, setClassValues] = React.useState({
		accessibility: 0,
		compatibility: 0,
		connectivity: 0,
		openness: 0,
		enhancement: 0,
		warning: 0,
	});

	React.useEffect(() => {
		if (status === "success") {
			setClassValues(classification);
			localStorage.setItem(
				targetWebsite,
				JSON.stringify({
					classification: classification,
					lighthouseData: lighthouseData,
				})
			);
		}
	}, [status, setClassValues, classification]);

	React.useEffect(() => {
		if (targetWebsite !== "") {
			localStorage.setItem("targetWebsite", targetWebsite);
		}
	}, [targetWebsite]);

	const openView = "/dashboard/" + useParams()["*"];

	return (
		<div className="flex flex-row flex-wrap h-full w-screen bg-main">
			<SideBar targetWebsite={targetWebsite} openView={openView} />
			<div className="flex-12 flex-col flex-wrap pt-8 bg-main">
				<div className="bg-white rounded-2xl px-24">
					<Routes>
						<Route
							path="/"
							element={
								<MainView
									classification={classification}
									data={lighthouseData}
									status={status}
									targetWebsite={targetWebsite}
								/>
							}
						/>
						<Route
							path="/compatibility"
							element={
								<SpecificView
									data={lighthouseData}
									status={status}
									criteriaClass={classValues.compatibility}
								/>
							}
						/>
						<Route
							path="/accessibility"
							element={
								<SpecificView
									data={lighthouseData}
									status={status}
									criteriaClass={classValues.accessibility}
								/>
							}
						/>
						<Route
							path="/connectivity"
							element={
								<SpecificView
									data={lighthouseData}
									status={status}
									criteriaClass={classValues.connectivity}
								/>
							}
						/>
						<Route
							path="/openness"
							element={
								<SpecificView
									data={lighthouseData}
									status={status}
									criteriaClass={classValues.openness}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
			<Footer />
		</div>
	);
}
