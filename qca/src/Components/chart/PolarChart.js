import * as React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Skeleton from "@mui/material/Skeleton";

export default function PolarChart({ status }) {
	const DATA_COUNT = 5;
	const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

	// const labels = Date.months({ count: 7 });
	const data = {
		labels: [
			"Overall Yay",
			"Overall Nay",
			"Group A Yay",
			"Group A Nay",
			"Group B Yay",
			"Group B Nay",
			"Group C Yay",
			"Group C Nay",
		],
		datasets: [
			{
				backgroundColor: ["#AAA", "#FFFFFF"],
				data: [50, 79, 3],
			},
			{
				backgroundColor: ["hsl(0, 100%, 60%)", "#FFFFFF"],
				data: [50, 67],
			},
			{
				backgroundColor: ["hsl(100, 100%, 60%)", "#FFFFFF"],
				data: [50, 80],
			},
			{
				backgroundColor: ["hsl(180, 100%, 60%)", "#FFFFFF"],
				data: [50, 90],
			},
		],
	};

	const options = {
		rotation: 270,
		offset: 1,
		responsive: true,
		borderJoinStyle: "round",
		spacing: 4,
		borderWidth: 10,
		plugins: {
			beforeDraw: chart => {
				chart.legend.afterFit = function () {
					this.height = this.height + 150;
				};
			},
			legend: {
				labels: {
					generateLabels: function (chart) {
						// Get the default label list
						const original =
							ChartJS.overrides.pie.plugins.legend.labels.generateLabels;
						const labelsOriginal = original.call(this, chart);

						// Build an array of colors used in the datasets of the chart
						let datasetColors = chart.data.datasets.map(function (e) {
							return e.backgroundColor;
						});
						datasetColors = datasetColors.flat();

						// Modify the color and hide state of each label
						labelsOriginal.forEach(label => {
							// There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
							label.datasetIndex = (label.index - (label.index % 2)) / 2;

							// The hidden state must match the dataset's hidden state
							label.hidden = !chart.isDatasetVisible(label.datasetIndex);

							// Change the color to match the dataset
							label.fillStyle = datasetColors[label.index];
						});

						return labelsOriginal;
					},
				},
				onClick: function (mouseEvent, legendItem, legend) {
					// toggle the visibility of the dataset from what it currently is
					legend.chart.getDatasetMeta(legendItem.datasetIndex).hidden =
						legend.chart.isDatasetVisible(legendItem.datasetIndex);
					legend.chart.update();
				},
			},
			tooltip: {
				callbacks: {
					label: function (context) {
						const labelIndex = context.datasetIndex * 2 + context.dataIndex;
						return (
							context.chart.data.labels[labelIndex] +
							": " +
							context.formattedValue
						);
					},
				},
			},
		},
	};
	ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

	// const data = {
	// 	labels: config.evaluation,
	// 	datasets: [
	// 		{
	// 			label: "전체 점수",
	// 			data: result.sampleData,
	// 			backgroundColor: [...config.polargraphcolor],
	// 			borderWidth: 1,
	// 		},
	// 	],
	// };

	return (
		<div className="min-w-[400px] w-5/12 mt-4">
			<div>
				<span className="mt-8 text-2xl font-bold">여러 가지 검사한 결과..</span>
				{status === "success" ? (
					<Doughnut data={data} options={options} />
				) : (
					<Skeleton sx={{ width: "132%", height: 800, marginTop: -14 }} />
				)}
			</div>
		</div>
	);
}
