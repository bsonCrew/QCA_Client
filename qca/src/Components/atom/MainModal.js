import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import config from "../../config.json";
import MainExplanation from "../explanation/MainExplanation";

export default function MainModal(props) {
	return (
		<Dialog
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			disableAutoFocus={true}
			fullWidth
			maxWidth="sm"
			sx={{
				"& .MuiDialog-container": {
					"& .MuiPaper-root": {
						width: "100%",
						maxWidth: "lg",
						height: "100%",
						marginBottom: -10,
						marginTop: -10,
					},
				},
			}}
		>
			<Button
				onClick={props.handleClose}
				color="primary"
				autoFocus
				sx={{
					width: 100,
					backgroundColor: config.colors["gray-light"],
					"&:hover": {
						backgroundColor: config.colors.main,
					},
					position: "sticky",
					left: "90%",
					top: "2%",
					// top: 30,
				}}
			>
				<p className="font-bold text-md">이해했어요</p>
			</Button>
			<div className="w-fit">
				<div className="-mt-12">
					<MainExplanation />
				</div>
			</div>
		</Dialog>
	);
}
