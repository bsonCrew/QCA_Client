import StatDataGrid from '../Components/stat/StatDataGrid';
import ScoreCard from '../Components/card/ScoreCard';
import BarChart from '../Components/chart/BarChart';
import ExplanationCard from '../Components/card/ExplanationCard';
import StatDataStepper from '../Components/stat/StatDataStepper';
import React from 'react';

import useFormedAudits from '../Hooks/useFormedAudits';

import Phrase from '../Components/layout/Phrase';
import AuditsDataGrid from '../Components/chart/AuditsDataGrid';

const StatDataGridPhrase = (
  <div className='w-full mt-32 mb-12'>
    <div className='text-2xl font-bold'>모든 결과가 필요하다면..</div>
    <div className='mt-2 text-lg'>모든 검사 항목을 여기 정리했어요.</div>
  </div>
);

function MainView({
  classification,
  data,
  status,
  targetWebsite,
  targetWebsiteScore,
}) {
  const formedAudits = useFormedAudits(classification);

  return (
    <div className='flex flex-col py-10'>
      <Phrase
        title={'지금 누리집은'}
        subtitle={
          '진단은 저희가 할게요! 이제 누리집을 더 편리하게 평가할 수 있어요.'
        }
      />
      <div className='flex flex-row flex-wrap'>
        <div className='grow'>
          <ExplanationCard
            targetWebsite={targetWebsite}
            targetWebsiteScore={targetWebsiteScore}
            status={status}
          />
        </div>
        <div className='min-w-[240px]'>
          <ScoreCard
            status={status}
            score={targetWebsiteScore[6]?.toFixed(1)}
          />
        </div>
      </div>
      <StatDataStepper
        classification={classification}
        data={data}
        status={status}
      />

      <BarChart
        status={status}
        targetWebsite={targetWebsite}
        targetWebsiteScore={targetWebsiteScore}
        className='my-10 flex flex-wrap'
      />
      <div className='w-full'>
        {StatDataGridPhrase}
        <AuditsDataGrid formedAudits={formedAudits} status={status} />
      </div>
    </div>
  );
}

export default React.memo(MainView);
