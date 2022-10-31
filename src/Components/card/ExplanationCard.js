import * as React from 'react';

import Skeleton from '@mui/material/Skeleton';
import ExplanationModal from '../modal/ExplanationModal';
import config from '../../config.json';
import BeautifulBar from '../atom/BeautifulBar';
import styled from '@emotion/styled';

// import { H3Gray, H2Black } from "../../Themes/CustomStyled";

const HeaderText = styled(`span`)({
  margin: '0 0 0 0',
  fontWeight: 700,
  fontSize: 'min(1.8rem, 5vw)',
  color: config.colors.blue,
});

const CardWrapper = styled(`div`)({
  // height: "100%",
  margin: '2vh 2vw 2vh 2vw',
  borderRadius: '0 0 5px 5px',
  boxShadow: `${config.colors['gray-light']} 0px 0px 20px`,
  '&:hover': {
    boxShadow: `${config.colors['gray-light']} 0px 0px 50px`,
  },
  display: 'flex',
  flexDirection: 'column',
});

const ExplCardButton = styled(`button`)({
  width: '100%',
  height: '100%',
  minWidth: '280px',
  backgroundColor: config.colors.white,
  padding: '2rem',
  borderRadius: '0 0 5px 5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
});

export default function ExplanationCard({
  targetWebsite,
  targetWebsiteScore,
  status,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const catchPhrase = (score) => {
    if (score > 90) return config.scorePhrase[0];
    else if (score > 70) return config.scorePhrase[1];
    else if (score > 50) return config.scorePhrase[2];
    else if (score > 30) return config.scorePhrase[3];
    else return config.scorePhrase[4];
  };

  return (
    <CardWrapper>
      <ExplanationModal
        open={open}
        handleClose={handleClose}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      />
      <BeautifulBar height={3} flatBottom={true} />
      {status === 'success' ? (
        <ExplCardButton onClick={handleOpen}>
          <HeaderText>{catchPhrase(targetWebsiteScore[6])}</HeaderText>
          <br />
          <span>{`${targetWebsite}의 총점은 ${+targetWebsiteScore[6]?.toFixed(1)
            }점입니다.`}</span>
          <br />
          <span>
            {config.evaluation[0]} 점수는 <b>{targetWebsiteScore[0]}점</b>,{' '}
            {config.evaluation[1]} 점수는 <b>{targetWebsiteScore[1]}점</b>,{' '}
            {config.evaluation[2]} 점수는 <b>{targetWebsiteScore[2]}점</b>,{' '}
            {config.evaluation[3]} 점수는 <b>{targetWebsiteScore[3]}점</b>
            입니다.
          </span>
        </ExplCardButton>
      ) : (
        <Skeleton variant='rounded' height={270} />
      )}
    </CardWrapper>
  );
}
