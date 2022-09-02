import audits from "../../audits.json";

const createClassifyMap = mapId => {
	const criteriaMap = new Map(
		Object.keys(audits.auditMappings[mapId]).map(key => {
			const rowItem = audits.auditMappings[mapId][key];
			Object.keys(rowItem).forEach(r => {
				rowItem[r].scores = [];
			});
			return [key, rowItem];
		})
	);
	return criteriaMap;
};

const classify = lighthouseResults => {
	/** 0: accessibility, 1: compatibility, 2: connectivity, 3: openness */

	const [
		accessibility,
		compatibility,
		connectivity,
		openness,
		enhancement,
		warning,
	] = [
		"accessibility",
		"compatibility",
		"connectivity",
		"openness",
		"enhancement",
		"warning",
	].map(_ => createClassifyMap(_));
	const criterias = {
		accessibility,
		compatibility,
		connectivity,
		openness,
		enhancement,
		warning,
	};

	lighthouseResults.forEach(lr => {
		console.log(lr.score, lr.id, lr.scoreDisplayMode);
		if (audits.audits[lr.id] !== undefined) {
			const audit = audits.audits[lr.id];
			const criteria = criterias[audit.class].get(audit.subClass)[
				audit.criteriaId
			];
			criteria.scores.push(lr.score);
		}
	});
	console.log(criterias);
	return criterias;
};

const calculate = (criterias, website) => {};

export default classify;
