import DataCard from "../../Components/card/DataCard";
import { SpecCard } from "../SpecificView";

import styled from "@emotion/styled";
import { RedText, H2Gray, BlueText, H2Black } from "../../Themes/CustomStyled";
import Expl1 from "../../assets/Algorithm/Expl1.svg";
import Expl2 from "../../assets/Algorithm/Expl2.svg";
import Expl3 from "../../assets/Algorithm/Expl3.svg";
import config from "../../config.json";

const ShowAlgorithmWrapper = styled(`div`)({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});

const ExplImage = styled(`img`)({
	width: "100%",
	margin: "6vh 0 6vh 0",
	scale: "110%",
});

const SpecCardsWrapper = styled(`div`)({
	backgroundColor: config.colors.main,
	display: "flex",
	alignItems: "center",
	padding: "1vw",
	flexDirection: "row",
	flexWrap: "wrap",
	width: "100%",
	borderRadius: "20px",
});

const ExplText = (
	<H2Gray>
		실제로 QCA가 실행하는 자동화 검사 중 일부를 예시로 들어 보겠습니다.
		<br />
		<br />
		<br /> 웹 사이트의 표를 올바르게 구성 것은 정확한 웹 페이지를 이해하기 위해
		꼭 필요합니다.
		<br />
		그럼 웹사이트가 <BlueText>적절한 대체 텍스트를 제공</BlueText> 하는지 확인해
		봅시다.
		<br />
		<br />
		먼저, <BlueText>적절한 대체 텍스트 제공</BlueText>의 평가 분류는 다음과
		같습니다.
		<br />
		이는 전자정부 웹사이트 품질관리 가이드를 따릅니다.
		<br />
		<ExplImage
			src={Expl1}
			alt={"웹 접근성, 인식의 용이성, 적절한 대체 텍스트 제공F"}
		/>
		QCA는 세부사항을 한번 더 나눕니다.
		<br />
		<br /> 적절한 대체 텍스트 제공의 평가는 4개의 <RedText>세부 지표</RedText>로
		나누어져 관리됩니다.
		<ExplImage
			src={Expl2}
			alt={"image-alt, input-image-alt, object-alt, button-name"}
		/>
		4개의 <RedText>세부 지표</RedText>결과값은 검사 결과 종합 알고리즘을
		통과합니다.
		<br />
		<br /> QCA는 지표의 종류에 따라 13개의 점수 종합 알고리즘을 사용해요.
		<ExplImage
			src={Expl3}
			alt={"점수 종합 알고리즘을 통과한 후 적절한 대체 텍스트 점수 나누기 10"}
		/>
		🎉웹 사이트가 테스트를 모두 통과했습니다.
		<br />
		<br />
		이제 최종 결과를 볼까요?
		<br />
		<br />
		<H2Black>
			<br /> 알고리즘을 통과한 점수는 이렇게 표시됩니다.
		</H2Black>
	</H2Gray>
);

export default function ShowAlgorithm() {
	return (
		<ShowAlgorithmWrapper>
			{ExplText}
			<SpecCardsWrapper>
				<SpecCard status={"success"} spec={config.hasAltText} />
			</SpecCardsWrapper>
		</ShowAlgorithmWrapper>
	);
}
