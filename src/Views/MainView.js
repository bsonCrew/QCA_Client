import StatDataGrid from "../Components/stat/StatDataGrid";
import ScoreCard from "../Components/card/ScoreCard";
import BarChart from "../Components/chart/BarChart";
import ExplanationCard from "../Components/card/ExplanationCard";
import StatDataStepper from "../Components/stat/StatDataStepper";
import React from "react";

import Phrase from "../Components/layout/Phrase";

function MainView({
	classification,
	data,
	status,
	targetWebsite,
	targetWebsiteScore,
}) {
	return (
		<div className="flex flex-col py-10">
			<Phrase
				title={"지금 누리집은"}
				subtitle={
					"진단은 저희가 할게요! 이제 누리집을 더 편리하게 평가할 수 있어요."
				}
			/>
			<div className="flex flex-row flex-wrap">
				<div className="grow">
					<ExplanationCard
						targetWebsite={targetWebsite}
						targetWebsiteScore={targetWebsiteScore}
						status={status}
					/>
				</div>
				<div className="min-w-[240px]">
					<ScoreCard
						status={status}
						score={Math.round(targetWebsiteScore[6])}
					/>
				</div>
			</div>
			<StatDataStepper
				classification={classification}
				data={data}
				status={status}
			/>

			<BarChart
				status={status}
				targetWebsite={targetWebsite}
				targetWebsiteScore={targetWebsiteScore}
				className="my-10 flex flex-wrap"
			/>
			<StatDataGrid status={status} data={data} />
		</div>
	);
}

export default React.memo(MainView);
