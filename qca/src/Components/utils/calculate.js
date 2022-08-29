import audits from "../../audits.json";

const calculate = lighthouseResult => {
	console.log(audits.audits);
	console.log(lighthouseResult);
	// Accessibility, Compatibility, Connectivity, Openness
	const classification = [[], [], [], []];

	lighthouseResult.forEach(criteria => {
		console.log(criteria.id);
		console.log(criteria.score);
	});
};

export default calculate;
