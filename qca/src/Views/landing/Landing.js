import * as React from "react";

import SearchBar from "../../Components/search/SearchBar";
import Header from "../../Components/layout/Header";
import Recommend from "../../Components/search/Recommend";
import LandingFooter from "../../Components/layout/LandingFooter";
import LandingExpl from "./LandingExpl";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import Copyright from "../../Components/layout/Copyright";

function Landing({ setTargetWebsite }) {
	const LandingCompWrapper = styled(`div`)({
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		alignItems: "center",
	});

	return (
		<LandingCompWrapper>
			<Header />
			<LandingExpl />
			{/* <SearchBar setTargetWebsite={setTargetWebsite} /> */}
			<Recommend />
			<Copyright />
		</LandingCompWrapper>
	);
}
export default Landing;
