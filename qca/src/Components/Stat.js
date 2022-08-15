import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { darken, lighten } from "@mui/material/styles";
import result from "../result.json";

import Box from "@mui/material/Box";
import sampeData from "../sampleData.json";

const getBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

function StyledDatagrid(props) {
	const data = props.data;
	const newData = {
		columns: data["rows"].field,
		rows: data["columns"],
		initialState: data["initialState"],
	};
	console.log(data);
	console.log(newData);
	return (
		<Box
			sx={{
				height: "100%",
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

export default function Stat(props) {
	return (
		<div className="w-full h-full px-6 pb-24">
			<div className="mt-12 mb-8 text-2xl font-bold">
				<h1>세부사항을 보면요..</h1>
			</div>
			<StyledDatagrid {...props} />
		</div>
	);
}
