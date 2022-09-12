import * as React from "react";
import SideBar from "../Components/layout/Sidebar";
import Footer from "../Components/layout/Footer";
import MainView from "./MainView";
import useLighthouse from "../hooks/useQualification";
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
	const [targetWebsiteScore, settargetWebsiteScore] = React.useState([]);
	let [status, lighthouseData, classification] = useLighthouse(targetWebsite);
	console.log(status);
	// console.log(location.state.data);

	React.useEffect(() => {
		if (status === "success" && targetWebsiteScore.length === 0) {
			const newTargetScore = classification.map(
				criteria => criteria.resultScore
			);
			newTargetScore.unshift(
				newTargetScore.reduce((acc, cur) => {
					return acc + cur;
				}, 0) / newTargetScore.length
			);
			settargetWebsiteScore(newTargetScore);
		}
	}, [status]);

	React.useEffect(() => {
		if (status === "success") {
			localStorage.setItem(
				targetWebsite,
				JSON.stringify({
					classification: classification,
					lighthouseData: lighthouseData,
				})
			);
		}
	}, [status, classification]);

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
									targetWebsiteScore={targetWebsiteScore}
								/>
							}
						/>
						<Route
							path="/compatibility"
							element={
								<SpecificView
									data={lighthouseData}
									status={status}
									criteriaClass={classification[0]}
								/>
							}
						/>
						<Route
							path="/accessibility"
							element={
								<SpecificView
									data={lighthouseData}
									status={status}
									criteriaClass={classification[1]}
								/>
							}
						/>
						<Route
							path="/connectivity"
							element={
								<SpecificView
									data={lighthouseData}
									status={status}
									criteriaClass={classification[2]}
								/>
							}
						/>
						<Route
							path="/openness"
							element={
								<OpennessView
									data={lighthouseData}
									status={status}
									criteriaClass={classification[3]}
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
