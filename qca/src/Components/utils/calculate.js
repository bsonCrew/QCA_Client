import audits from "../../audits.json";

const createCriteriaMap = mapId => {
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
	// return [accessibility, compatibility, connectivity, openness];
};

const calculate = lighthouseResults => {
	/** 0: accessibility, 1: compatibility, 2: connectivity, 3: openness */

	const accessibility = createCriteriaMap("accessibility");
	console.log(accessibility);

	lighthouseResults.forEach(lr => {
		if (audits.audits[lr.id] !== undefined) {
			console.log(lr);
		}
	});

	// console.log(accessibility, compatibility, connectivity, openness);
};

export default calculate;
