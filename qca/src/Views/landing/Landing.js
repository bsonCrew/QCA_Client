import * as React from "react";

import SearchBar from "../../Components/search/SearchBar";
import Header from "../../Components/layout/Header";
import Recommend from "../../Components/search/Recommend";

import styled from "@emotion/styled";

import LandingExpl from "./LandingExpl";
import LandingFooter from "../../Components/layout/LandingFooter";
import Copyright from "../../Components/layout/Copyright";
import Banner from "./Banner";

function Landing({ setTargetWebsite }) {
	const LandingWrapper = styled(`div`)({
		top: "0",
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		alignItems: "center",
	});

	return (
		<LandingWrapper>
			<Header />
			<Banner />
			<LandingExpl />
			<SearchBar setTargetWebsite={setTargetWebsite} />
			<Recommend />
			<Copyright />
			<LandingFooter />
		</LandingWrapper>
	);
}
export default Landing;
