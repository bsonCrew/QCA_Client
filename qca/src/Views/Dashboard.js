import * as React from "react";
import SideBar from "../Components/layout/Sidebar";
import Footer from "../Components/layout/Footer";
import MainView from "./MainView";
import config from "../config.json";
import useQualification from "../Hooks/useQualification";
import {
	Routes,
	Route,
	useParams,
	useLocation,
	useNavigate,
} from "react-router-dom";

import SpecificView from "./SpecificView";

export default function Dashboard() {
	const location = useLocation();
	const [targetWebsite, setTargetWebsite] = React.useState(
		location.state?.targetWebsite || localStorage.getItem("targetWebsite") || ""
	);
	const [targetWebsiteScore, settargetWebsiteScore] = React.useState([]);
	let [status, lighthouseData, classification, robot] =
		useQualification(targetWebsite);

	const navigate = useNavigate();

	console.log(classification);

	React.useEffect(() => {
		if (status === "success" && targetWebsiteScore.length === 0) {
			const newTargetScore = classification.map(
				criteria => criteria.resultScore
			);
			newTargetScore.push(
				newTargetScore.reduce((acc, cur) => {
					return acc + cur;
				}, 0) / 4
			);
			settargetWebsiteScore(newTargetScore);
		} else if (status === "error") {
			navigate("/");
		}
	}, [status]);

	React.useEffect(() => {
		if (status === "success") {
			localStorage.setItem(
				targetWebsite,
				JSON.stringify({
					classification: classification,
					lighthouseData: lighthouseData,
					robot: robot,
				})
			);
		}
	}, [status, classification]);

	React.useEffect(() => {
		if (targetWebsite !== "") {
			localStorage.setItem("targetWebsite", targetWebsite);
		}
	}, [targetWebsite]);

	console.log(status);

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
									id="main"
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
									status={status}
									criteriaClass={classification[0]}
									title={config.evaluation[0]}
								/>
							}
						/>
						<Route
							path="/accessibility"
							element={
								<SpecificView
									status={status}
									criteriaClass={classification[1]}
									title={config.evaluation[1]}
								/>
							}
						/>

						<Route
							path="/openness"
							element={
								<SpecificView
									status={status}
									criteriaClass={classification[2]}
									title={config.evaluation[2]}
									robot={robot}
								/>
							}
						/>
						<Route
							path="/connectivity"
							element={
								<SpecificView
									status={status}
									criteriaClass={classification[3]}
									title={config.evaluation[3]}
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
