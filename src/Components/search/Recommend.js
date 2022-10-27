import * as React from 'react';
import useTop5 from '../../Hooks/useTop5';
import ShortCut from './RecommendShortcut';

import styled from '@emotion/styled';

const RecommentWrapper = styled(`div`)({
  width: '100%',
  margin: '2vh 0 0 0',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
export default function Recommend() {
  const [status, data] = useTop5();

  return (
    <RecommentWrapper>
      {status === 'success'
        ? data?.map((el) => (
            <ShortCut
              key={el.homepage}
              label={el.label}
              homepage={el.homepage}
            />
          ))
        : null}
    </RecommentWrapper>
  );
}
