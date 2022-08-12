import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { darken, lighten } from "@mui/material/styles";
import result from "../result.json";

import Box from "@mui/material/Box";

const getBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

function StyledDatagrid() {
	const { data } = useDemoData({
		dataSet: result.data,
		rowLength: 10,
	});

	console.log(data);

	return (
		<Box
			sx={{
				height: 400,
				width: "100%",
				"& .super-app-theme--Open": {
					bgcolor: theme =>
						getBackgroundColor(theme.palette.info.main, theme.palette.mode),
					"&:hover": {
						bgcolor: theme =>
							getHoverBackgroundColor(
								theme.palette.info.main,
								theme.palette.mode
							),
					},
				},
				"& .super-app-theme--Filled": {
					bgcolor: theme =>
						getBackgroundColor(theme.palette.success.main, theme.palette.mode),
					"&:hover": {
						bgcolor: theme =>
							getHoverBackgroundColor(
								theme.palette.success.main,
								theme.palette.mode
							),
					},
				},
				"& .super-app-theme--PartiallyFilled": {
					bgcolor: theme =>
						getBackgroundColor(theme.palette.warning.main, theme.palette.mode),
					"&:hover": {
						bgcolor: theme =>
							getHoverBackgroundColor(
								theme.palette.warning.main,
								theme.palette.mode
							),
					},
				},
				"& .super-app-theme--Rejected": {
					bgcolor: theme =>
						getBackgroundColor(theme.palette.error.main, theme.palette.mode),
					"&:hover": {
						bgcolor: theme =>
							getHoverBackgroundColor(
								theme.palette.error.main,
								theme.palette.mode
							),
					},
				},
			}}
		>
			<DataGrid
				{...data}
				getRowClassName={params => `super-app-theme--${params.row.status}`}
			/>
		</Box>
	);
}

export default function Stat() {
	return (
		<div className="w-full h-full">
			<div className="mt-12 mb-8 text-2xl font-bold">
				<h1>세부사항을 보면요..</h1>
			</div>
			<StyledDatagrid
				sx={{
					height: "50vh",
				}}
			/>
		</div>
	);
}
