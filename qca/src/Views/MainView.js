import Stat from "../Components/atom/Stat";
import Score from "../Components/atom/Score";
import VeticalChart from "../Components/chart/VerticalChart";
import ExplanationCard from "../Components/atom/ExplanationCard";
import StepGrid from "../Components/atom/StepGrid";
import React from "react";

export default function MainView({
	classification,
	data,
	status,
	targetWebsite,
}) {
	const [targetWebsiteScore, settargetWebsiteScore] = React.useState([]);

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
	}, [status, classification, targetWebsiteScore]);

	return (
		<>
			<div className="my-10 flex flex-row flex-wrap ">
				<div className="w-full h-9 mt-12 mb-14">
					<span className="text-2xl font-bold">지금 누리집은</span>
				</div>
				<div className="flex-4 min-w-[280px]">
					<ExplanationCard
						targetWebsite={targetWebsite}
						targetWebsiteScore={targetWebsiteScore}
						status={status}
					/>
				</div>
				<div className="flex-2 min-w-[280px]">
					<Score status={status} score={Math.floor(targetWebsiteScore[0])} />
				</div>
				<StepGrid classification={classification} data={data} status={status} />
			</div>
			<VeticalChart
				status={status}
				targetWebsite={targetWebsite}
				targetWebsiteScore={targetWebsiteScore}
				className="my-10 flex flex-wrap"
			/>
			<div className="flex w-full h-full pb-24 overflow-hidden">
				<Stat status={status} data={data} />
			</div>
		</>
	);
}
