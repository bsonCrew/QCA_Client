import * as React from "react";

import SearchBar from "../Components/search/SearchBar";
import Header from "../Components/layout/Header";
import Recommend from "../Components/search/Recommend";

import styled from "@emotion/styled";

import WhatisQCA from "./landing/WhyQca";
import HowQca from "./landing/HowQCA";

import LandingFooter from "../Components/layout/LandingFooter";
import Copyright from "../Components/layout/Copyright";
import Banner from "./landing/Banner";
import FeatureCards from "./landing/FeatureCard";

import { HBlue, H2Black, H2Gray, HWhite } from "../Themes/CustomStyled";
import ShowAlgorithm from "./landing/ShowAlgorithm";
import config from "../config.json";

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

	const BottomWrapper = styled(`div`)({
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: config.colors.black,
	});

	const SearchWrapper = styled(`div`)({
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: "0vh 16vw 10vh 16vw",
	});

	const link1 = React.useRef(null);
	const link2 = React.useRef(null);
	const link3 = React.useRef(null);
	const link4 = React.useRef(null);

	return (
		<LandingWrapper>
			<Header scrollRefs={[link1, link2, link3, link4]} />
			<Banner />
			<BodyWrapper ref={link1}>
				<HBlue>QCA란?</HBlue>
				<H2Gray>Quality Control Automation : 품질관리 자동화</H2Gray>
				<WhatisQCA />

				<HBlue>왜 QCA를 써야 하죠?</HBlue>
				<H2Gray>QCA의 3가지 특징</H2Gray>
				<FeatureCards />

				<div ref={link2} />
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
				<div ref={link3} />
				<HBlue>알고리즘</HBlue>
				<ShowAlgorithm />
				<H2Gray>
					<br />
					<br />
					QCA는 모든 평가항목을 이런 알고리즘을 통과하고, 결과값을 도출합니다.
					<br />
					<br />
					이제 사용자가 읽을 준비가 됐어요! <br />
					<br />
				</H2Gray>
			</BodyWrapper>

			<BottomWrapper>
				<SearchWrapper ref={link4}>
					<HBlue>검사하기</HBlue>
					<HWhite>자, 이제 검사해볼까요?</HWhite>
					<SearchBar setTargetWebsite={setTargetWebsite} />
					<Recommend />
				</SearchWrapper>
				<LandingFooter />
			</BottomWrapper>
		</LandingWrapper>
	);
}
export default Landing;
