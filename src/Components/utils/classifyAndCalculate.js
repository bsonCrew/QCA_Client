import audits from "../../audits.json";
import calcByFncType from "./calcByFncType";
import createCriteriaObj from "./createCriteriaObj";

const calculateAndClassify = auditResults => {
	/** 0: accessibility, 1: compatibility, 2: connectivity, 3: openness, 4:enhancement, 5:warning */
	const classification = [
		"compatibility",
		"accessibility",
		"openness",
		"connectivity",
		"enhancement",
		"warning",
	].map(criteria => createCriteriaObj(criteria));

	auditResults.forEach(auditResult => {
		const spec =
			audits.auditMappings[audits.audits[auditResult.id].class][
				audits.audits[auditResult.id].subClass
			][audits.audits[auditResult.id].spec];
		try {
			spec.scores.push(auditResult.score);
			spec.items.push(auditResult);
		} catch {
			console.info("found undefined criteria: ", auditResult.id);
		}
	});

	classification.forEach(criteria => {
		let criteriaScore = 0;
		let criteriaTotalScore = 0;

		Object.values(criteria)
			.filter(x => !Number.isFinite(x))
			.forEach(subClass => {
				let score = 0;
				let totalScore = 0;
				Object.values(subClass)
					.filter(x => !Number.isFinite(x))
					.forEach(spec => {
						score += calcByFncType(spec);
						totalScore += spec.totalScore;
					});
				subClass.resultScore = score;
				subClass.totalScore = totalScore;

				criteriaScore += score;
				criteriaTotalScore += totalScore;
			});

		criteria.resultScore = criteriaScore;
		criteria.totalScore = criteriaTotalScore;
	});

	return classification;
};

export default calculateAndClassify;
