import { printColumnConfig } from "../utils/gridConfig.js";
import config from "../../config.json";

const formAudits = data => {
	const stack = [];
	const evaluation = config.evaluation;

	for (let i = 0; i < data.length; i++) {
		Object.entries(data[i])
			.filter(x => x[0] !== "resultScore" && x[0] !== "totalScore")
			.forEach(([subClassKey, subClassVal]) => {
				Object.entries(subClassVal)
					.filter(x => x[0] !== "resultScore" && x[0] !== "totalScore")
					.forEach(([specKey, specVal], idx) => {
						// const items = specVal.items.map(item => {
						// 	return item;
						// });
						stack.push({
							class: evaluation[i],
							subClass: subClassKey,
							spec: specKey,
							id: specVal.title,
							itemNum: specVal.items?.length,
							totalScore: specVal.totalScore,
							resultScore: specVal.resultScore,
							percentage:
								specVal.totalScore !== 0
									? Math.floor(specVal.resultScore / specVal.totalScore) * 100
									: 100,
						});
					});
			});
	}

	return {
		columns: printColumnConfig,
		rows: stack,
		initialState: {
			columns: {
				columnVisibilityModel: {
					id: false,
				},
			},
		},
	};
};
