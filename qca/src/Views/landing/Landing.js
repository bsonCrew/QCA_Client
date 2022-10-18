import * as React from "react";

import SearchBar from "../../Components/search/SearchBar";
import Header from "../../Components/layout/Header";
import Recommend from "../../Components/search/Recommend";

import styled from "@emotion/styled";

import WhatisQCA from "./WhyQca";
import HowQca from "./HowQCA";

import LandingFooter from "../../Components/layout/LandingFooter";
import Copyright from "../../Components/layout/Copyright";
import Banner from "./Banner";
import FeatureCards from "./FeatureCard";

import { HBlue, H2Black, H2Gray } from "../../Themes/CustomStyled";

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

	const BodyWrapper = styled(`div`)({
		display: "flex",
		flexDirection: "column",
		justifyItems: "center",
		alignItems: "center",
		margin: "0 16vw 0 16vw",
	});

	const link1 = React.useRef(null);
	const link2 = React.useRef(null);
	const link3 = React.useRef(null);

	const executeScroll = ref =>
		ref.current.scrollIntoView({ behavior: "smooth" });

	return (
		<LandingWrapper>
			<Header link={link1} executeScroll={executeScroll} />
			<Banner />
			<BodyWrapper>
				<HBlue ref={link1}>QCA란?</HBlue>
				<H2Gray>Quality Control Automation : 품질관리 자동화</H2Gray>
				<WhatisQCA />

				<HBlue>왜 QCA를 써야 하죠?</HBlue>
				<H2Gray>QCA의 3가지 특징</H2Gray>
				<FeatureCards />

				<HBlue>QCA 사용법</HBlue>
				<H2Gray>
					웹 사이트의 표를 올바르게 구성 것은 정확한 웹 페이지를 이해하기 위해
					꼭 필요합니다.
				</H2Gray>

				<H2Black>총점을 한 눈에</H2Black>
				<H2Gray>
					웹 사이트를 검사하면 가장 먼저 웹 페이지의 총점을 알려 드려요
				</H2Gray>
				<HowQca />

				<HBlue>알고리즘</HBlue>

				<HBlue>검사하기</HBlue>
			</BodyWrapper>

			<SearchBar setTargetWebsite={setTargetWebsite} />
			<Recommend />
			<Copyright />

			<LandingFooter />
		</LandingWrapper>
	);
}
export default Landing;
