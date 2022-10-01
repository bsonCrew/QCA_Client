import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Skeleton from "@mui/material/Skeleton";

import config from "../../config.json";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const labels = config.iconInfo.slice(0, 5);

const BarChartPhrase = (
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
);

export default function BarChart({
	status,
	targetWebsite,
	targetWebsiteScore,
}) {
	const options = {
		maintainAspectRatio: false,
		responsive: true,

		indexAxis: "y",
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		plugins: {
			legend: {
				position: "right",
			},
			title: {
				display: true,
				text: `비교군 vs ${targetWebsite}`,
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: "비교군",
				data: config.sampleLargeData,
				backgroundColor: config.bargraphcolor[0],
			},
			{
				label: targetWebsite,
				data: targetWebsiteScore,
				backgroundColor: config.bargraphcolor[1],
			},
		],
	};
	return (
		<>
			{BarChartPhrase}
			<div className="min-w-[400px] w-full px-4 flex">
				{status === "success" ? (
					<div className="flex flex-row align-middle justify-center">
						<Bar width={1000} height={500} options={options} data={data} />
					</div>
				) : (
					<Skeleton sx={{ width: "100%", height: 400, marginTop: -6 }} />
				)}
			</div>
		</>
	);
}
