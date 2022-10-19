import * as React from "react";
import bannerImg1 from "../../assets/BannerImage.png";
import styled from "@emotion/styled";
import config from "../../config.json";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Video from "../landing/Video";

const BannerWrapper = styled.div({
	width: "100%",
	height: "94vh",
});

const BannerVideoWrapper = styled.div({
	width: "100%",
	height: "100%",
	marginTop: "6vh",
});

const BannerImgWrapper = styled.div(props => {
	return {
		width: "100%",
		height: "100%",
		backgroundImage: `url(${props.bannerImg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		color: config.colors.main,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "2vw",
	};
});

const BannerText = styled.div({
	flexGrow: 1,
	width: "50%",
	marginLeft: "15%",
	justifyContent: "center",
	fontSize: "3rem",
	fontWeight: "bold",
});

const ButtonGroup = styled.div({
	position: "absolute",
	marginTop: "50vh",
	// marginBottom: "48.6vh",
	paddingRight: "2vw",
	paddingLeft: "2vw",
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	zIndex: 10,
});

const ChevronButton = styled.div({
	":hover": {
		cursor: "pointer",
		borderRadius: "50%",
	},
});

const BannerContent1 = (
	<BannerImgWrapper bannerImg={bannerImg1}>
		<BannerText>
			웹사이트 품질 관리,
			<br /> 한 번에 끝내 드릴게요
		</BannerText>
	</BannerImgWrapper>
);
const BannerContent2 = (
	<BannerVideoWrapper>
		<Video />
	</BannerVideoWrapper>
);

const bannerContents = [BannerContent1, BannerContent2];

const Navigator = ({ activeIndex, updateIndex }) => {
	return (
		<ButtonGroup>
			<ChevronButton
				onClick={() => {
					updateIndex(activeIndex - 1);
				}}
			>
				<ChevronLeftIcon
					fontSize="large"
					sx={{ color: activeIndex === 0 ? "white" : "yellow" }}
				/>
			</ChevronButton>

			<ChevronButton
				onClick={() => {
					updateIndex(activeIndex + 1);
				}}
			>
				<ChevronRightIcon
					fontSize="large"
					sx={{ color: activeIndex === 0 ? "white" : "yellow" }}
				/>
			</ChevronButton>
		</ButtonGroup>
	);
};

const Banner = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const updateIndex = () => {
		setActiveIndex(1 - activeIndex);
	};

	return (
		<BannerWrapper>
			<Navigator updateIndex={updateIndex} activeIndex={activeIndex} />
			{bannerContents[activeIndex]}
		</BannerWrapper>
	);
};
export default Banner;
