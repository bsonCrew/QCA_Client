import * as React from 'react';
import config from '../../config.json';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DangerousIcon from '@mui/icons-material/Dangerous';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ConstructionIcon from '@mui/icons-material/Construction';
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';

import DataCardModal from '../modal/DataCardModal';

const CardWrapper = styled(`div`)({
  minWidth: '200px',
  maxWidth: '480px',
  margin: '2rem',
  height: 'max(16vh,200px)',
  transition: 'ease-in-out',
  borderRadius: '0 0 5px 5px',
  // padding: "2rem",
  boxShadow: `${config.colors['gray-light']} 0px 0px 20px`,
  '&:hover': {
    boxShadow: `${config.colors['gray-light']} 0px 0px 50px`,
  },
  display: 'flex',
  flexDirection: 'column',
});

const CustomAvatar = styled(Avatar)((props) => {
  return {
    margin: '-1rem 0 -1.2rem -1rem',
    '&:hover': {
      cursor: 'pointer',
    },
  };
});

const DataCardButton = styled(`button`)({
  height: '100%',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  padding: '2vh max(2vw,18px) 2vh max(2vw,18px)',
  backgroundColor: config.colors.white,
});

const DataCardTitle = styled(`span`)({
  fontSize: '1.1rem',
  margin: '0 0 1vh 0',
});

const DataCardExpl = styled(`span`)({
  fontSize: '0.9rem',
  color: config.colors.lightBlue,
});

export default function DataCard(props) {
  const [iconIdx, setIconIdx] = React.useState(0);
  const [clicked, setClicked] = React.useState(false);
  const handleClose = () => setClicked(false);

  React.useEffect(() => {
    if (props.calcFunctionType === 1) {
      setIconIdx(3);
    } else if (props.calcFunctionType === 2) {
      setIconIdx(1);
    } else if (props.resultScore > props.totalScore / 2 || props.score === 1) {
      setIconIdx(0);
    } else {
      setIconIdx(2);
    }
  }, [
    props.calcFunctionType,
    props.resultScore,
    props.totalScore,
    props.score,
  ]);

  const icons = [
    <ThumbUpAltIcon fontSize='medium' />, // 잘했어요
    <DangerousIcon fontSize='small' />, // 위험해요
    <ConstructionIcon fontSize='small' />, // 아쉬워요
    <AnnouncementIcon fontSize='small' />, // 개선해봅시다
    <CheckIcon fontSize='small' />,
  ];

  const bgcolors = config.warningcolors;

  return (
    <CardWrapper>
      <Tooltip
        title={config.catchPhrase[iconIdx] || 'No description'}
        placement='left'
        arrow
      >
        <CustomAvatar
          sx={{
            width: 36,
            height: 36,
            zIndex: 2,
            bgcolor: bgcolors[iconIdx],
          }}
        >
          {icons[iconIdx]}
        </CustomAvatar>
      </Tooltip>
      <DataCardModal
        {...props}
        open={clicked}
        handleClose={handleClose}
        onClose={handleClose}
      ></DataCardModal>
      {props.status === 'success' ? (
        <DataCardButton onClick={() => setClicked(!clicked)}>
          <DataCardTitle>{props.title}</DataCardTitle>
          <DataCardExpl className='text-sm font-bold text-blue'>
            {props.subheader.split('. ')[0]}
          </DataCardExpl>
        </DataCardButton>
      ) : (
        <Skeleton
          sx={{ width: '100%', height: 128, bgcolor: 'grey.300' }}
          variant='rounded'
        />
      )}
    </CardWrapper>
  );
}
