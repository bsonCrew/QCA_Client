import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { darken, lighten } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const getBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
	mode === "dark" ? darken(color, 0.5) : lighten(color, 0.5);

function StyledDatagrid({ data }) {
	const formedData = {
		columns: data["columns"],
		rows: data["rows"],
		initialState: data["initialState"],
	};

	const [snackbarOpen, setSnackbarOpen] = React.useState(false);

	const handleClick = item => {
		setSnackbarOpen(true);
	};

	const handleClose = (e, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackbarOpen(false);
	};

	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<>
			<Snackbar
				open={snackbarOpen}
				autoHideDuration={1000}
				onClose={handleClose}
				message="Note archived"
				action={action}
			/>
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
				<DataGrid
					{...formedData}
					getRowClassName={params => `super-app-theme--${params.row.status}`}
					checkboxSelection
					onSelectionModelChange={item => handleClick(item)}
				/>
			</Box>
		</>
	);
}

export default function Stat({ data, status }) {
	return (
		<div className="w-full h-screen px-6 pb-24">
			<div className="mt-12 mb-8 text-2xl font-bold">
				<h1>세부사항을 보면요..</h1>
			</div>
			{status === "success" ? (
				<StyledDatagrid data={data} />
			) : (
				<Skeleton sx={{ width: "100%", height: 800, marginTop: -22 }} />
			)}
		</div>
	);
}
