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

import result from "../../result.json";
import config from "../../config.json";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "진단 위험",
		},
	},
};

const labels = config.info;

export const data = {
	labels,
	datasets: [
		{
			label: "비교군",
			data: result.sampleLargeData,
			backgroundColor: config.colors.blue,
		},
		{
			label: result.target,
			data: result.sampleLargeData2,
			backgroundColor: config.colors.red,
		},
	],
};

export default function VeticalChart() {
	return (
		<div className="w-5/12 mt-4 px-4">
			<Bar height={280} options={options} data={data} />
		</div>
	);
}
