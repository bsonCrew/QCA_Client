import { printColumnConfig } from '../Components/utils/gridConfig';
import config from '../config.json';

const useFormedAudits = (classification) => {
  const stack = [];
  const evaluation = config.evaluation;

  const isScoreValue = (x) => x[0] !== 'resultScore' && x[0] !== 'totalScore';

  for (let i = 0; i < classification.length; i++) {
    Object.entries(classification[i])
      .filter((x) => isScoreValue(x))
      .forEach(([subClassKey, subClassVal]) => {
        Object.entries(subClassVal)
          .filter((x) => isScoreValue(x))
          .forEach(([specKey, specVal], idx) => {
            stack.push({
              class: evaluation[i],
              subClass: subClassKey,
              spec: specKey,
              id: specVal.title,
              itemNum: Math.max(specVal.items?.length, 1),
              totalScore: specVal.totalScore,
              resultScore: specVal.resultScore,
              percentage:
                specVal.totalScore !== 0
                  ? Math.floor(specVal.resultScore / specVal.totalScore * 100)
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

export default useFormedAudits;
