import BeautifulBar from '../../Components/atom/BeautifulBar';
import Button from '@mui/material/Button';
import BalanceIcon from '@mui/icons-material/Balance';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import AutoModeIcon from '@mui/icons-material/AutoMode';

import config from '../../config.json';
import styled from '@emotion/styled';

const CardsWrapper = styled(`div`)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
});

const FeatureCardWrapper = styled(`div`)({
  width: '26%',
  minWidth: 'min(280px,60vw)',
  minHeight: '50vh',
  margin: '1vw',
  padding: '3rem',
  borderRadius: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',

  backgroundColor: config.colors.white,
  boxShadow: `${config.colors['gray-light']} 10px 10px 20px`,
  '&:hover': {
    boxShadow: `${config.colors['gray-light']} 10px 10px 50px`,
  },
});

const FeatureCardIconWrapper = styled(`div`)({
  padding: '4px',
  borderRadius: '50%',
  minWidth: '120px',
  minHeight: '120px',
  backgroundColor: config.colors['gray-light'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FeatureCardTitle = styled(`div`)({
  fontSize: '1.5rem',
  fontWeight: '700',
  margin: '3vh 0 1rem 0',
});
const FeatureCardExpl = styled(`div`)({
  fontSize: '0.9rem',
  fontWeight: '700',
  width: '70%',
  margin: '1rem 0 1rem 0',
});

const LearnMore = styled(Button)({
  marginTop: '2vh',
  color: config.colors.blue,
  fontWeight: '600',
});

const featureCardsIcon = [
  <BalanceIcon fontSize='large' />,
  <SquareFootIcon fontSize='large' />,
  <AutoModeIcon fontSize='large' />,
];

const landingCardsInfo = [
  {
    title: '자동화',
    expl: '관리에 필요한 시간을 효율적으로 단축시킵니다',
    icon: BalanceIcon,
  },
  {
    title: '정확성',
    expl: `정량적인 검사로 검사 결과의 정확성을 확보합니다`,
  },
  {
    title: '공정성',
    expl: '웹 품질관리 가이드의 기술적 표준을 구축했습니다',
  },
];

export const FeatureCard = ({ title, expl, idx }) => {
  return (
    <FeatureCardWrapper>
      <FeatureCardIconWrapper>{featureCardsIcon[idx]}</FeatureCardIconWrapper>
      <FeatureCardTitle>{title}</FeatureCardTitle>
      <FeatureCardExpl>{expl}</FeatureCardExpl>
      <BeautifulBar height={0.5} width={10} />
      {/* <LearnMore>자세히 알아보기</LearnMore> */}
    </FeatureCardWrapper>
  );
};

const FeatureCards = () => {
  return (
    <CardsWrapper>
      {landingCardsInfo.map((info, idx) => (
        <FeatureCard
          idx={idx}
          key={info.title}
          title={info.title}
          expl={info.expl}
        />
      ))}
    </CardsWrapper>
  );
};

export default FeatureCards;
