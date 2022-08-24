import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import config from "../../config.json";
import MarkDown from "../utils/Markdown";

export default function ScoreModal(props) {
	const description2 = config.scoreDescription.description2;
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
						maxWidth: "1000px", // Set your width here
					},
				},
			}}
		>
			<div className="w-fit h-[95vh]">
				<div id="markdown" className="h-full overflow-y-scroll p-6">
					{config.scoreDescription.title}
					<p id="modal-modal-title" className="text-4xl pb-4 font-bold"></p>
					<p id="modal-modal-description" className="text-lg pb-6">
						{config.scoreDescription.description}
					</p>

					{description2.map((phrase, idx) => {
						return (
							<p
								id={"modal-modal-description" + idx}
								className="text-lg pb-1"
								key={idx}
							>
								{phrase}
							</p>
						);
					})}
					<MarkDown />
					<Button
						onClick={props.handleClose}
						color="primary"
						autoFocus
						sx={{
							width: "25%",
							backgroundColor: config.colors["gray-light"],
							"&:hover": {
								backgroundColor: config.colors.main,
							},
						}}
					>
						<p className="font-bold text-md">이해했어요</p>
					</Button>
				</div>
			</div>
		</Dialog>
	);
}
