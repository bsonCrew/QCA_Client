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

export default function VeticalChart({
	status,
	targetWebsite,
	targetWebsiteScore,
}) {
	const options = {
		indexAxis: "y",
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
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
		<div className="min-w-[400px] w-full mt-4 px-4">
			<span className="mt-8 text-2xl font-bold">
				다른 사이트들은 이렇습니다
			</span>
			<div className="flex">
				{status === "success" ? (
					<div className="flex flex-row align-middle justify-center">
						<Bar width={1100} height={500} options={options} data={data} />
					</div>
				) : (
					<Skeleton sx={{ width: "100%", height: 400, marginTop: -6 }} />
				)}
			</div>
		</div>
	);
}
