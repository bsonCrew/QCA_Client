import * as React from "react";

import SearchBar from "../Components/search/SearchBar";
import Header from "../Components/layout/Header";
import Recommend from "../Components/search/Recommend";
import bkgImage from "../Themes/bkg.svg";
import LandingFooter from "../Components/layout/LandingFooter";
import { Button, Dialog } from "@mui/material";

function Landing({ setTargetWebsite }) {
	const [clicked, setClicked] = React.useState(false);
	const handleClose = () => setClicked(false);

	return (
		<div
			style={{
				backgroundImage: `url(${bkgImage})`,
				backgroundSize: "cover",
				height: "100vh",
			}}
			className="w-full h-full flex flex-col justify-between"
		>
			<div className="flex flex-col align-center items-center">
				<Header />
				<SearchBar setTargetWebsite={setTargetWebsite} />
				<Recommend />
			</div>
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
		</div>
	);
}
export default Landing;
