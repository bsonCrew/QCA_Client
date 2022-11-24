const calcByFncType = (spec) => {
  if (Number.isInteger(spec) || Number.isNaN(spec)) return 0;
  const nullOneCount = spec.scores.filter(
    (score) => score === 1 || score === null
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
      return +nullOneCount * (spec.totalScore / spec.scores.length).toFixed(1);

    //4. null, 1 제외 총점 감점
    case 4:
      return nullOneCount === spec.scores.length ? spec.totalScore : 0;

    //5. null, 1 제외 1점 감점
    case 5:
      return Math.max(0, spec.totalScore - (spec.scores.length - nullOneCount));

    //6. items 갯수당 1점 감점
    case 6:
      return Math.max(
        spec.totalScore -
        spec.items.reduce((acc, cur) => (acc += cur.score), 0),
        0
      );

    //7.평가항목 없음.
    case 7:
      return nullOneCount === 0 ? spec.totalScore : 0;

    //TODO: 8. robots.txt
    case 8:
      return spec.scores[0];

    //TODO: 9. 개별 검사
    case 9:
      return spec.totalScore;

    //10.하나라도 아니면 0점
    case 10:
      return nullOneCount === 0 ? spec.totalScore : 0;

    //11. 0점
    case 11:
      return 0;

    //12. 100점
    case 12:
      return spec.totalScore;

    //13. 구간에 따라 점수 부여 - 크기, 속도
    case 13:
      switch (spec.title) {
        case '웹 접속성 속도 평가 기준':
          if (spec.items[0].numericValue > 5000) {
            spec.resultScore = 0;
          } else if (spec.items[0].numericValue > 3000) {
            spec.resultScore = 25;
          } else {
            spec.resultScore = 50;
          }
          return spec.resultScore;
        case '웹 접속성 크기 평가 기준':
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
        +(spec.scores.reduce((a, b) => a + b, 0) / spec.scores.length).toFixed(1);
      return 0;
  }
};

export default calcByFncType;
