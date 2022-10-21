import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { darken, lighten } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import { displayColumnConfig } from "../utils/gridConfig";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const getBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

function StyledDatagrid({ targetWebsite }) {
	return (
		<>
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
							getBackgroundColor(
								theme.palette.success.main,
								theme.palette.mode
							),
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
							getBackgroundColor(
								theme.palette.warning.main,
								theme.palette.mode
							),
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
				{/* <DataGrid
					{...formedData}
					getRowClassName={params => `super-app-theme--${params.row.status}`}
					checkboxSelection
				/> */}
			</Box>
		</>
	);
}

const StatDataGridPhrase = (
	<div className="w-full mt-32 mb-12">
		<div className="text-2xl font-bold">전문적인 결과가 필요하다면..</div>
		<div className="mt-2 text-lg">모든 검사 항목은 여기 있어요.</div>
	</div>
);

// export default function StatDataGrid({ data, status }) {
// 	return (
// 		<>
// 			{StatDataGridPhrase}
// 			<div className="w-full h-screen px-6 pb-24">
// 				{status === "success" ? (
// 					<AuditsDataGrid targetWebsite={targetWebsite} />
// 				) : (
// 					<Skeleton sx={{ width: "100%", height: 800, marginTop: -22 }} />
// 				)}
// 			</div>
// 		</>
// 	);
// }
