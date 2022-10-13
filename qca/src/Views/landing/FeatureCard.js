import styled from "@emotion/styled";
import config from "../../config.json";
import Button from "@mui/material/Button";
import BeautifulBar from "../../Components/layout/BeautifulBar";
import BalanceIcon from "@mui/icons-material/Balance";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import AutoModeIcon from "@mui/icons-material/AutoMode";

const CardsWrapper = styled(`div`)({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	flexWrap: "wrap",
	padding: "0 3vw 0 3vw",
});

const FeatureCardWrapper = styled(`div`)({
	width: "26%",
	minWidth: "280px",
	// flexGrow: "1",
	height: "50vh",
	backgroundColor: config.colors.white,
	boxShadow: `${config.colors["gray-light"]} 10px 10px 20px`,
	"&:hover": {
		boxShadow: `${config.colors["gray-light"]} 10px 10px 50px`,
	},
	
	margin: "1vw",
	padding: "3rem",
	borderRadius: "2rem",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	justifyContent: "center",
});

const FeatureCardIconWrapper = styled(`div`)({
	borderRadius: "50%",
	width: "120px",
	height: "120px",
	backgroundColor: config.colors["gray-light"],
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const FeatureCardTitle = styled(`div`)({
	fontSize: "1.5rem",
	fontWeight: "700",
	marginTop: "3rem",
	margin: "3rem 0 1rem 0",
});
const FeatureCardExpl = styled(`div`)({
	fontSize: "0.9rem",
	fontWeight: "700",
	width: "70%",
	margin: "1rem 0 1rem 0",
});

const LearnMore = styled(Button)({
	marginTop: "2vh",
	color: config.colors.blue,
	fontWeight: "600",
});

const featureCardsIcon = [
	<BalanceIcon fontSize="large" />,
	<SquareFootIcon fontSize="large" />,
	<AutoModeIcon fontSize="large" />,
];

const landingCardsInfo = [
	{
		title: "자동화",
		expl: "관리에 필요한 시간을 효율적으로 단축시킵니다",
		icon: BalanceIcon,
	},
	{
		title: "정확성",
		expl: "정량적인 검사로 검사 결과의 정확성을 확보합니다",
	},
	{
		title: "공정성",
		expl: "웹 품질관리 가이드의 기술적 표준을 구축했습니다",
	},
];

export const FeatureCard = ({ title, expl, idx }) => {
	return (
		<FeatureCardWrapper>
			<FeatureCardIconWrapper>{featureCardsIcon[idx]}</FeatureCardIconWrapper>
			<FeatureCardTitle>{title}</FeatureCardTitle>
			<FeatureCardExpl>{expl}</FeatureCardExpl>
			<BeautifulBar height={0.5} width={10} />
			<LearnMore>자세히 알아보기</LearnMore>
		</FeatureCardWrapper>
	);
};

const FeatureCards = () => {
	return (
		<CardsWrapper>
			{landingCardsInfo.map((info, idx) => (
				<FeatureCard
					idx={idx}
					key={info.title}
					title={info.title}
					expl={info.expl}
				/>
			))}
		</CardsWrapper>
	);
};

export default FeatureCards;
