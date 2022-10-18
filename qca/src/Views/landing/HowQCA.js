import ScoreCard from "../../Components/card/ScoreCard";
import ExplanationCard from "../../Components/card/ExplanationCard";
import DataCard from "../../Components/card/DataCard";
import { H2Black, H2Gray } from "../../Themes/CustomStyled";
import styled from "@emotion/styled";

import config from "../../config.json";

const HowWrapper = styled(`div`)({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});

const CardsWrapper = styled(`div`)({
	width: "100%",
	minWidth: "280px",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	flexWrap: "wrap",
});

const ExplWrapper = styled(`div`)({
	width: "100%",
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	margin: "6vh 0 6vh 0",
	flexWrap: "wrap-reverse",
});

const ExplText = styled(`div`)({
	minWidth: "50%",
	padding: "3vh 0 0 0",
	display: "flex",
	flexDirection: "column",
});

const DataCardsWrapper = styled(`div`)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
});

const HowQca = () => {
	return (
		<HowWrapper>
			<CardsWrapper>
				<ScoreCard status={"success"} score={"100"} />
				<ExplanationCard
					targetWebsite={"www.example.com"}
					targetWebsiteScore={Array(7).fill(100)}
					status={"success"}
				/>
			</CardsWrapper>
			<ExplWrapper>
				<DataCardsWrapper>
					<DataCard
						status={"success"}
						subheader={config.sampleSpecificData1.description}
						{...config.sampleSpecificData1}
					/>
					<DataCard
						status={"success"}
						subheader={config.sampleSpecificData2.description}
						{...config.sampleSpecificData2}
					/>
					<DataCard
						status={"success"}
						subheader={config.sampleSpecificData3.description}
						{...config.sampleSpecificData3}
						calcFunctionType={1}
					/>
				</DataCardsWrapper>
				<ExplText>
					<H2Black>한 눈에 보는 항목</H2Black>
					<H2Gray>세부 지표들을 한 번에 확인하세요</H2Gray>
				</ExplText>
			</ExplWrapper>
		</HowWrapper>
	);
};

export default HowQca;
