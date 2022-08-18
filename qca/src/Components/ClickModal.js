import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import config from "../config.json";

export default function ClickModal(props) {
	const description2 = config.scoreDescription.description2;
	return (
		<Modal
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			className="w-full h-full flex justify-center items-center"
			disableAutoFocus={true}
		>
			<div className="w-6/12 h-4/6 bg-white p-12 rounded-lg flex flex-col justify-between">
				<div>
					<p id="modal-modal-title" className="text-4xl pb-4 font-bold">
						{config.scoreDescription.title}
					</p>
					<p id="modal-modal-description" className="text-lg pb-6">
						{config.scoreDescription.description}
					</p>
					{description2.map((phrase, idx) => {
						return (
							<p
								id={"modal-modal-description" + idx}
								className="text-lg pb-2"
								key={idx}
							>
								{phrase}
							</p>
						);
					})}
				</div>
				<div className="flex justify-center">
					<Button
						sx={{
							width: "25%",
							backgroundColor: config.colors["gray-light"],
							"&:hover": {
								backgroundColor: config.colors.main,
							},
						}}
						onClick={props.handleClose}
					>
						<p className="font-bold text-md">이해했어요</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
}
