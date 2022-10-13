import ScoreCard from "../../Components/card/ScoreCard";
import ExplanationCard from "../../Components/card/ExplanationCard";
import DataCard from "../../Components/card/DataCard";
import styled from "@emotion/styled";

const HowWrapper = styled(`div`)({
	width: "60%",
	display: "flex",
	flexDirection: "column",
});

const CardsWrapper = styled(`div`)({
	width: "100%",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	justifyContent: "space-between",
});

const CardExplWrapper = styled(`div`)({
	display: "flex",
	justifyContent: "center",
});

const DataCardsWrapper = styled(`div`)({
	display: "flex",
	flexDirection: "column",
});

const data1 = {
	score: 1,
	description:
		"스크린 리더에서 목록 항목(`<li>`)을 올바르게 읽으려면 목록 항목이 상위 `<ul>` 또는 `<ol>`에 포함되어 있어야 합니다. [자세히 알아보기](https://web.dev/listitem/)",
	details: {
		headings: [],
		type: "table",
		items: [],
	},
	id: "listitem",
	title: "목록 항목(`<li>`)이 `<ul>` 또는 `<ol>` 상위 요소 내에 포함되어 있음",
	scoreDisplayMode: "binary",
};

const data2 = {
	displayValue: "타사 코드가 390 ms 동안 기본 스레드를 차단했습니다.",
	score: 0,
	description:
		"타사 코드는 로드 성능에 크게 영향을 미칠 수 있습니다. 페이지에서 먼저 로딩을 끝낸 후 중복되는 타사 공급업체의 수를 제한하고 타사 코드를 로드해 보세요. [자세히 알아보기](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/)",
	details: {
		summary: {
			wastedMs: 389.084,
			wastedBytes: 20611,
		},
		headings: [
			{
				subItemsHeading: {
					itemType: "url",
					key: "url",
				},
				itemType: "link",
				text: "타사",
				key: "entity",
			},
			{
				subItemsHeading: {
					key: "transferSize",
				},
				itemType: "bytes",
				granularity: 1,
				text: "전송 크기",
				key: "transferSize",
			},
			{
				subItemsHeading: {
					key: "blockingTime",
				},
				itemType: "ms",
				granularity: 1,
				text: "기본 스레드 차단 시간",
				key: "blockingTime",
			},
		],
		type: "table",
		items: [
			{
				transferSize: 20611,
				blockingTime: 389.084,
				mainThreadTime: 454.9400000000001,
				subItems: {
					type: "subitems",
					items: [
						{
							transferSize: 20403,
							blockingTime: 389.084,
							mainThreadTime: 454.9400000000001,
							url: "https://www.google-analytics.com/analytics.js",
						},
					],
				},
				entity: {
					text: "Google Analytics",
					type: "link",
					url: "https://marketingplatform.google.com/about/analytics/",
				},
			},
		],
	},
	id: "third-party-summary",
	title: "타사 코드의 영향을 줄임",
	scoreDisplayMode: "binary",
};

const data3 = {
	score: 0,
	description:
		"많은 사용자가 저대비 텍스트를 읽는 데 어려움을 겪거나 전혀 읽지 못합니다. [자세히 알아보기](https://web.dev/color-contrast/)",
	details: {
		headings: [
			{
				subItemsHeading: {
					itemType: "node",
					key: "relatedNode",
				},
				itemType: "node",
				text: "통과하지 못한 요소",
				key: "node",
			},
		],
		debugData: {
			impact: "serious",
			type: "debugdata",
			tags: ["cat.color", "wcag2aa", "wcag143"],
		},
		type: "table",
	},
	id: "color-contrast",
	title: "백그라운드 및 포그라운드 색상의 대비율이 충분하지 않습니다",
	scoreDisplayMode: "binary",
};

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
			<DataCardsWrapper>
				<DataCard status={"success"} subheader={data1.description} {...data1} />
				<DataCard status={"success"} subheader={data2.description} {...data2} />
				<DataCard
					status={"success"}
					subheader={data3.description}
					{...data3}
					calcFunctionType={1}
				/>
			</DataCardsWrapper>
		</HowWrapper>
	);
};

export default HowQca;
