import * as React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import result from "../../result.json";
import config from "../../config.json";

export default function PolarChart() {
	const options = {
		plugins: {
			datalabels: {
				display: true,
				backgroundColor: "#ffffff",
				borderRadius: 10,
				font: {
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
							size: 28,
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
		labels: config.info,
		datasets: [
			{
				label: "전체 점수",
				data: result.sampleData,
				backgroundColor: [
					config.colors.blue,
					config.colors.red,
					config.colors.green,
					config.colors.yellow,
					config.colors.purple,
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
