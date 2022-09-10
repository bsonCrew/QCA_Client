import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import config from "../../config.json";
import MarkDown from "./Markdown";

export default function ScoreModal(props) {
	const description = config.scoreDescription.description2;
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
					},
				},
			}}
		>
			<div className="w-fit h-[95vh] p-16 overflow-y-scroll">
				<p id="modal-modal-title" className="text-6xl pb-4 font-bold">
					총점
				</p>

				<p id="modal-modal-description" className="text-xl font-semibold pb-6">
					총점 계산 알고리즘은 아래와 같습니다.
				</p>

				<p className="text-lg pb-1">
					<ol>
						<li>총점은 전체 성능 점수와 성능 점수의 비율을 계산합니다.</li>
						<li>전체 성능 점수는 성능 점수의 합계입니다.</li>
					</ol>
				</p>
				<br />
				<hr />
				<div id="markdown" className="h-full ">
					<MarkDown />
					<Button
						onClick={props.handleClose}
						color="primary"
						// autoFocus
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
