import Stat from "../Components/atom/Stat";
import Score from "../Components/atom/Score";
import BarChart from "../Components/chart/BarChart";
import ExplanationCard from "../Components/atom/ExplanationCard";
import StepGrid from "../Components/atom/StepGrid";
import React from "react";

function MainView({
	classification,
	data,
	status,
	targetWebsite,
	targetWebsiteScore,
}) {
	return (
		<>
			<div className="my-10 flex flex-row flex-wrap ">
				<div className="w-full my-12">
					<div>
						<span className="text-2xl font-bold">지금 누리집은</span>
					</div>
					<div className="mt-2">
						<span className="text-lg">
							진단은 저희가 할게요! 이제 누리집을 더 편리하게 평가할 수 있어요.
						</span>
					</div>
				</div>

				<div className="flex-4 min-w-[280px]">
					<ExplanationCard
						targetWebsite={targetWebsite}
						targetWebsiteScore={targetWebsiteScore}
						status={status}
					/>
				</div>
				<div className="flex-2 min-w-[280px]">
					<Score status={status} score={Math.round(targetWebsiteScore[6])} />
				</div>

				<div className="w-full mt-32">
					<span className="text-2xl font-bold">
						전체 점수는 이렇게 나왔어요
					</span>
					<div className="mt-2">
						<span className="text-lg">
							간단히 요약된 점수입니다. 자세한 점수는 왼쪽 대시보드에서 확인할
							수 있어요.
						</span>
					</div>
				</div>
				<StepGrid classification={classification} data={data} status={status} />
			</div>

			<div className="w-full mt-32 mb-12">
				<div>
					<span className="text-2xl font-bold">비교해봅시다</span>
				</div>
				<div className="mt-2">
					<span className="text-lg">
						다른 누리집과 비교했을 때 어떤 점수를 받았는지 확인해보세요.
					</span>
				</div>
			</div>

			<BarChart
				status={status}
				targetWebsite={targetWebsite}
				targetWebsiteScore={targetWebsiteScore}
				className="my-10 flex flex-wrap"
			/>

			<div className="w-full mt-32 mb-12">
				<div>
					<span className="text-2xl font-bold">
						전문적인 결과가 필요하다면..
					</span>
				</div>
				<div className="mt-2">
					<span className="text-lg">모든 검사 항목은 여기 있어요.</span>
				</div>
			</div>

			<div className="flex w-full h-full pb-24 overflow-hidden">
				<Stat status={status} data={data} />
			</div>
		</>
	);
}

export default React.memo(MainView);
