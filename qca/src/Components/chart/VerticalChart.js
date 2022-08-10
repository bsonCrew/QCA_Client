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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: "rgba(53, 162, 235, 0.5)",
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
