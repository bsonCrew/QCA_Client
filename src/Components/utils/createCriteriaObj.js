import audits from '../../audits.json';

const createCriteriaObj = (mapId) => {
  const criteriasObj = {};
  try {
    Object.keys(audits.auditMappings[mapId]);
  } catch {}

  Object.keys(audits.auditMappings[mapId])
    .map((row) => {
      const rowItem = audits.auditMappings[mapId][row];
      Object.keys(rowItem).forEach((r) => {
        if (Number.isFinite(rowItem[r]) || Number.isNaN(rowItem[r]))
          return criteriasObj;
        rowItem[r].scores = [];
        rowItem[r].items = [];
        rowItem[r].resultScore = 0;
      });
      return [row, rowItem];
    })
    .forEach((criteriaMapItem) => {
      criteriasObj[criteriaMapItem[0]] = criteriaMapItem[1];
    });

  return criteriasObj;
};

export default createCriteriaObj;
