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
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "총점 비교",
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
	console.log(data, targetWebsiteScore);
	return (
		<div className="min-w-[400px] w-5/12 mt-4 px-4">
			<span className="mt-8 text-2xl font-bold">
				다른 사이트들은 이렇습니다
			</span>
			{status === "success" ? (
				<Bar height={280} options={options} data={data} />
			) : (
				<Skeleton sx={{ width: "98%", height: 800, marginTop: -14 }} />
			)}
		</div>
	);
}
