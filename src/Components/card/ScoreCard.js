import * as React from 'react';

import ScoreCardModal from '../modal/ScoreCardModal';
import Skeleton from '@mui/material/Skeleton';

import BeautifulBar from '../atom/BeautifulBar';
import styled from '@emotion/styled';
import config from '../../config.json';

const CardWrapper = styled(`div`)({
  height: '85%',
  margin: '2vh 2vw 2vh 2vw',
  borderRadius: '0 0 5px 5px',
  boxShadow: `${config.colors['gray-light']} 10px 10px 20px`,
  '&:hover': {
    boxShadow: `${config.colors['gray-light']} 10px 10px 50px`,
  },
  minWidth: '280px',
  // flexGrow: "1",
  backgroundColor: config.colors.white,

  display: 'flex',
  flexDirection: 'column',
  // alignItems: "center",
  // textAlign: "center",
  // justifyContent: "center",
});

const ScoreButtonCard = styled(`div`)({
  width: '100%',
  height: '100%',
  minWidth: '280px',
  backgroundColor: config.colors.white,
  padding: '2.4rem 2rem 4rem 2rem',

  borderRadius: '0 0 5px 5px',
  display: 'flex',
  flexDirection: 'column',
  // alignItems: "center",
  // textAlign: "center",
  justifyContent: 'center',
});

const ScoreText = styled(`span`)({
  fontSize: '1.2rem',
});
const Score = styled(`span`)({
  textAlign: 'center',
  fontSize: 'min(3rem,8vw)',
});

export default function ScoreCard({ score, status }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <CardWrapper>
      <ScoreCardModal
        open={open}
        handleClose={handleClose}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      />
      <BeautifulBar height={3} flatBottom={true} reverse={true} />

      {status === 'success' ? (
        <ScoreButtonCard role='button' onClick={handleOpen}>
          <ScoreText>총점</ScoreText>
          <Score>{score} / 100</Score>
        </ScoreButtonCard>
      ) : (
        <Skeleton variant='rounded' height={270} />
      )}
    </CardWrapper>
  );
}
