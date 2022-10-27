import * as React from 'react';
import styled from '@emotion/styled';
import bkg from '../../assets/cross.jpeg';
import LoadingSvg from './LoadingSvg';

const BackgroundWrapper = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  overflow: 'hidden',
});

const BackgroundImageWrapper = styled.div({
  position: 'absolute',
  top: -10,
  left: -10,
  padding: '-10px 0px 0px -10px',
  width: '120%',
  height: '100%',
  zIndex: 1,
  overflow: 'hidden',
  filter: ' brightness(0.5)',
  scale: 1.1,
});

const BackgroundVideo = styled.iframe({
  width: '100%',
  height: '100vh',
});

function Video() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [videoPlay, setVideoPlay] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setVideoPlay(true);
    }, 2100);
  });

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <BackgroundWrapper>
      <LoadingSvg display={videoPlay ? 'none' : 'flex'} />
      {windowWidth > 768 ? (
        <BackgroundVideo
          src='https://www.youtube.com/embed/O8D-3jw06hc?autoplay=1&playlist=O8D-3jw06hc&loop=1&controls=0&mute=1&modestbranding=1&showinfo=0&start=0&enablejsapi=1&&widgetid=3'
          frameBorder='0'
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title='QCA Demo Video'
        />
      ) : (
        <BackgroundImageWrapper>
          <img src={bkg} alt={'QCA Demo'} />
        </BackgroundImageWrapper>
      )}
    </BackgroundWrapper>
  );
}

export default React.memo(Video);
