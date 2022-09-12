// 견고성	웹 접근성	마크업 오류 방지(4)
// 웹 표준 준수	웹 호환성	(X)HTML 표준 준수(30)	백에서 validator api 사용후 결과 반환

// 웹 표준 준수	웹 호환성	문자(한글) 부호화 준수(1)	백에서 validator api 사용후 결과 반환

const calculateValidator = validator => {
	const charset = {
		score: 1,
		description: "웹 페이지는 문자(한글) 부호화를 준수하여야 함",
		id: "ko-charset",
		title: "문자(한글) 부호화가 없습니다",
		scoreDisplayMode: "notApplicable",
		items: [],
	};

	const htmlStandard = {
		score: 30,
		description: "웹페이지의 문법은 기술표준((X)HTML)을 준수하여야 함",
		id: "htmlStandard",
		title: "마크업 에러(HTML)이 발생요",
		scoreDisplayMode: "notApplicable",
		items: [],
	};

	const noMarkUpError = {
		score: 4,
		description:
			"마크업 언어의 요소는 열고 닫음, 중첩 관계 및 속성 선언에 오류가 없어야 함",
		id: "noMarkUpError",
		title: "마크업 언어에 속성 선언에 오류",
		scoreDisplayMode: "notApplicable",
		items: [],
	};

	validator
		.filter(el => el.type === "error")
		.forEach(el => {
			if (el.description.includes("charset")) {
				charset.score = 0;
				charset.items.push(el);
			}
			htmlStandard.items.push(el);
			noMarkUpError.items.push(el);
			htmlStandard.score--;
			noMarkUpError.score--;
		});

	return [charset, htmlStandard, noMarkUpError];
};

export default calculateValidator;
