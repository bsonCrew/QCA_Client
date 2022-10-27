import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import LandingFooter from './FooterContent';
import styled from '@emotion/styled';
import config from '../../config.json';

const CopyrightWrapper = styled.div({
  marginTop: '10vh',
});

const CopyrightBtnWrapper = styled.div({
  display: 'flex',
  flexDirection: 'center',
  marginBottom: '4vh',
  color: config.colors.beige,
});

export default function Copyright() {
  const [clicked, setClicked] = React.useState(false);
  const handleClose = () => setClicked(false);

  return (
    <CopyrightWrapper>
      <Dialog
        open={clicked}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        fullWidth
        maxWidth='lg'
      >
        <LandingFooter />
      </Dialog>
      <CopyrightBtnWrapper>
        <Button onClick={() => setClicked(!clicked)}>
          <b>Copyrights</b>
        </Button>
      </CopyrightBtnWrapper>
    </CopyrightWrapper>
  );
}
