import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import LandingFooter from "./LandingFooter";

export default function Copyright() {
	const [clicked, setClicked] = React.useState(false);
	const handleClose = () => setClicked(false);

	return (
		<>
			<Dialog
				open={clicked}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				fullWidth
				maxWidth="lg"
			>
				<LandingFooter />
			</Dialog>
			<div className="w-full flex justify-center mb-4">
				<Button onClick={() => setClicked(!clicked)}>
					<b>Copyrights</b>
				</Button>
			</div>
		</>
	);
}
