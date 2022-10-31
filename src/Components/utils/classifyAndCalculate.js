import audits from '../../audits.json';
import calcByFncType from './calcByFncType';
import createCriteriaObj from './createCriteriaObj';

const calculateAndClassify = (auditResults) => {
  /** 0: accessibility, 1: compatibility, 2: connectivity, 3: openness, 4:enhancement, 5:warning */
  const classification = [
    'compatibility',
    'accessibility',
    'openness',
    'connectivity',
    'enhancement',
    'warning',
  ].map((criteria) => createCriteriaObj(criteria));

  auditResults.forEach((auditResult) => {
    const spec =
      audits.auditMappings[audits.audits[auditResult.id].class][
      audits.audits[auditResult.id].subClass
      ][audits.audits[auditResult.id].spec];
    try {
      spec.scores.push(auditResult.score);
      spec.items.push(auditResult);
    } catch {
      console.info('found undefined criteria: ', auditResult.id);
    }
  });

  classification.forEach((criteria) => {
    criteria.totalScore = 0;
    criteria.resultScore = 0;

    Object.values(criteria)
      .filter((x) => !Number.isFinite(x) && !Number.isNaN(x))
      .forEach((subClass) => {
        subClass.totalScore = 0;
        subClass.resultScore = 0;

        Object.values(subClass)
          .filter((x) => !Number.isFinite(x) && !Number.isNaN(x))
          .forEach((spec) => {
            let specScore = +calcByFncType(spec).toFixed(1);

            spec.resultScore = specScore;
            subClass.totalScore += spec.totalScore;
            subClass.resultScore += specScore;
            criteria.totalScore += spec.totalScore;
            criteria.resultScore += specScore;

            // if (Number.isNaN(subClass.totalScore)
            //   || Number.isNaN(subClass.resultScore)
            //   || Number.isNaN(criteria.totalScore)
            //   || Number.isNaN(criteria.resultScore)) {
            //   console.log("NaN", criteria, subClass, spec);
            // }
          });


        // criteriaScore += specScore;
        // criteriaTotalScore += totalScore;
      });

    // criteria.resultScore = criteriaScore;
    // criteria.totalScore = criteriaTotalScore;
  });

  return classification;
};

export default calculateAndClassify;
