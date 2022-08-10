import * as React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

export default function PolarChart() {
	const options = {
		plugins: {
			datalabels: {
				display: true,
				backgroundColor: "#ccc",
				borderRadius: 3,
				font: {
					color: "red",
					weight: "bold",
				},
			},
			legend: {
				display: true,
				position: "right",
				fullSize: true,
			},
			polarlabel: {
				labels: [
					{
						text: "550",
						font: {
							size: 20,
							weight: "bold",
						},
					},
					{
						text: "total",
					},
				],
			},
		},
	};

	ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
	const data = {
		labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
					"rgba(75, 192, 192, 0.5)",
					"rgba(153, 102, 255, 0.5)",
					"rgba(255, 159, 64, 0.5)",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div className="w-5/12 mt-4 px-4">
			<PolarArea data={data} options={options} />
		</div>
	);
}
