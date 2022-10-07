import * as React from "react";
import bannerImg1 from "../../assets/BannerImage.png";
import styled from "@emotion/styled";
import config from "../../config.json";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const BannerWrapper = styled(`div`)(props => {
	return {
		width: "100%",
		height: "94vh",
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

const BannerText = styled(`div`)({
	flexGrow: 1,
	width: "50%",
	marginLeft: "15%",
	justifyContent: "center",
	fontSize: "3rem",
	fontWeight: "bold",
});

const MainText = styled(`div`)({
	width: "100%",
	height: "94vh",
	fontSize: "2.5rem",
	fontWeight: "bold",
	paddingRight: "15vw",
	paddingLeft: "15vw",
	textAlign: "center",
});

const ButtonGroup = styled(`div`)({
	marginTop: "-48.6vh",
	marginBottom: "48.6vh",
	paddingRight: "2vw",
	paddingLeft: "2vw",
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "space-between",
});

const ChevronButton = styled(`div`)({
	":hover": {
		cursor: "pointer",
		borderRadius: "50%",
	},
});

const BannerContent1 = (
	<BannerWrapper bannerImg={bannerImg1}>
		<BannerText>
			웹사이트 품질 관리,
			<br /> 한 번에 끝내 드릴게요
		</BannerText>
	</BannerWrapper>
);
const BannerContent2 = (
	<BannerWrapper bannerImg={bannerImg1}>
		<BannerText>
			anj
			<br /> 한 번에 끝내 드릴게요
		</BannerText>
	</BannerWrapper>
);

const Banner = ({ children }) => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const updateIndex = newIndex => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	};

	const bannerContents = [BannerContent1, BannerContent2];

	return (
		<>
			{/* <div style={{ transform: `translateX(-${activeIndex * 100}%)` }}> */}
			{bannerContents[activeIndex]}
			{activeIndex}
			<ButtonGroup>
				<ChevronButton
					onClick={() => {
						updateIndex(activeIndex - 1);
					}}
				>
					<ChevronLeftIcon fontSize="large" sx={{ color: "white" }} />
				</ChevronButton>

				<button
					onClick={() => {
						updateIndex(activeIndex + 1);
					}}
				>
					<ChevronRightIcon fontSize="large" sx={{ color: "white" }} />
				</button>
			</ButtonGroup>
			<MainText>
				접근성, 호환성, 접속성, 개방성 평가
				<br /> 정부 기준에 맞게 검사하고 서류 작성까지 저희가 다 알아서 할게요.
				<br />
				정부 웹사이트 품질관리를 한 번에 해결하세요
			</MainText>
		</>
	);
};
export default Banner;
