import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import config from "../../config.json";
import ExplanationModalContent from "../modalContent/ExplanationModalContent";
import styled from "@emotion/styled";

const StyledDialog = styled(Dialog)({
	arialabelledby: "점수를 설명하는 모달입니다",
	"& .MuiDialog-container": {
		"& .MuiPaper-root": {
			maxWidth: "80%",
			marginBottom: -10,
			marginTop: -10,
		},
	},
});

const DialogBtn = styled(Button)({
	width: 100,
	backgroundColor: config.colors["gray-light"],
	"&:hover": {
		backgroundColor: config.colors.main,
	},
	position: "sticky",
	left: "90%",
	top: "2%",
});

export default function ExplanationModal({ open, handleClose, onClose }) {
	return (
		<StyledDialog open={open} onClose={handleClose} disableAutoFocus={true}>
			<DialogBtn onClick={handleClose} autoFocus>
				<p className="font-bold text-md">이해했어요</p>
			</DialogBtn>
			<ExplanationModalContent className="-mt-12" />
		</StyledDialog>
	);
}
