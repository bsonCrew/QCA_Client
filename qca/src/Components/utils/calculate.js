import audits from "../../audits.json";

const classify = lighthouseResults => {
	const createClassifyMap = mapId => {
		const criteriasObj = {};
		Object.keys(audits.auditMappings[mapId])
			.map(row => {
				const rowItem = audits.auditMappings[mapId][row];
				Object.keys(rowItem).forEach(r => {
					rowItem[r].scores = [];
					rowItem[r].items = [];
					rowItem[r].resultScore = 0;
				});
				return [row, rowItem];
			})
			.forEach(criteriaMapItem => {
				criteriasObj[criteriaMapItem[0]] = criteriaMapItem[1];
			});

		return criteriasObj;
	};
	/** 0: accessibility, 1: compatibility, 2: connectivity, 3: openness, 4:enhancement, 5:warning */
	const criterias = [
		"accessibility",
		"compatibility",
		"connectivity",
		"openness",
		"enhancement",
		"warning",
	].map(criteria => createClassifyMap(criteria));

	lighthouseResults.forEach(lr => {
		const spec =
			audits.auditMappings[audits.audits[lr.id].class][
				audits.audits[lr.id].subClass
			][audits.audits[lr.id].spec];
		try {
			spec.scores.push(lr.score);
			spec.items.push(lr);
		} catch {
			console.info("found undefined criteria: ", lr.id);
		}
	});

	criterias.forEach(criteria => {
		let criteriaScore = 0;
		Object.values(criteria).forEach(subClass => {
			let score = 0;
			let totalScore = 0;
			Object.values(subClass).forEach(spec => {
				score += calcByFunctionType(spec);
				totalScore += spec.totalScore;
			});
			subClass.resultScore = score;
			subClass.totalScore = totalScore;
		});
		criteria.resultScore = criteriaScore;
	});
	return criterias;
};

const calcByFunctionType = spec => {
	const nullOneCount = spec.scores.filter(
		score => score === 1 || score === null
	).length;
	switch (spec.calcFunctionType) {
		//1. 개선에 넣기
		case 1:
			return spec.resultScore;

		//2. 경고에 넣기
		case 2:
			return spec.resultScore;

		//3. null, 1 제외 총점/갯수 감점
		case 3:
			spec.resultScore = nullOneCount * (spec.totalScore / spec.scores.length);
			return spec.resultScore;

		//4. null, 1 제외 총점 감점
		case 4:
			spec.resultScore = nullOneCount === 0 ? spec.totalScore : 0;
			return spec.resultScore;

		//5. null, 1 제외 1점 감점
		case 5:
			spec.resultScore =
				spec.totalScore > nullOneCount ? spec.totalScore - nullOneCount : 0;
			return spec.resultScore;

		//6. items 갯수당 1점 감점
		case 6:
			const detailErrorCount = spec.items[0].details.items.length;
			spec.resultScore =
				spec.totalScore > detailErrorCount
					? spec.totalScore - detailErrorCount
					: 0;
			return spec.resultScore;

		//7.평가항목 없음.
		case 7:
			spec.resultScore = nullOneCount === 0 ? spec.totalScore : 0;
			return spec.resultScore;

		//TODO: 8. 서버에서 받기
		case 8:
			spec.resultScore = spec.totalScore;
			return spec.resultScore;

		//TODO: 9. 손명빈이 검사
		case 9:
			spec.resultScore = spec.totalScore;
			return spec.resultScore;

		//10.하나라도 아니면 0점
		case 10:
			spec.resultScore = nullOneCount === 0 ? spec.totalScore : 0;
			return spec.resultScore;

		//11. 0점
		case 11:
			spec.resultScore = 0;
			return spec.resultScore;

		//12. 100점
		case 12:
			spec.resultScore = spec.totalScore;
			return spec.resultScore;

		//13. 구간에 따라 점수 부여 - 크기, 속도
		case 13:
			switch (spec.title) {
				case "웹 접속성 속도 평가 기준":
					if (spec.items[0].numericValue > 5000) {
						spec.resultScore = 0;
					} else if (spec.items[0].numericValue > 3000) {
						spec.resultScore = 25;
					} else {
						spec.resultScore = 50;
					}
					return spec.resultScore;
				case "웹 접속성 크기 평가 기준":
					if (spec.items[0].numericValue > 5000000) {
						spec.resultScore = 0;
					} else if (spec.items[0].numericValue > 3000000) {
						spec.resultScore = 25;
					} else {
						spec.resultScore = 50;
					}
					return spec.resultScore;
				default:
					return spec.resultScore;
			}
		//14. 에러 발생
		default:
			spec.resultScore =
				spec.scores.reduce((a, b) => a + b, 0) / spec.scores.length;
			return 0;
	}
};

export default classify;
