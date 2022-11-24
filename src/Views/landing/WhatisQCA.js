import * as React from "react";
import ExplImage from "../../assets/ExplImage.png";
import styled from "@emotion/styled";
import config from "../../config.json";
import { BlueText } from "../../Themes/CustomStyled";
import ExplanationModal from "../../Components/molecules/modal/ExplanationModal";

const moisURL = config.moisURL;

const ExplWrapper = styled(`div`)({
  width: "100%",
  display: "flex",
  // padding: "0 18vw 0 18vw",
  flexDirection: "column",
});

const Expl = styled(`div`)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

const ExplImg = styled(`div`)({
  margin: "2vw 2vw 2vw 2vw",
  minWidth: "280px",
  objectFit: "contain",
});

const ExplText = styled(`div`)({
  padding: "2vw 5vw 5vw 5vw",
  flex: "2",
  minWidth: "300px",
  fontWeight: 700,
  color: config.colors.gray,
});

const H1 = styled(`div`)({
  fontSize: "min(2.5rem, 5vw)",
  fontWeight: "bold",
  marginBottom: "3vh",
  color: config.colors.black,
});

const BlueTextWithUnderLine = styled(BlueText)({
  textDecoration: "underline",
});

const LearnMoreModalButton = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(!modalOpen);
  const handleClose = () => {
    setModalOpen(false);
    console.log("close");
    console.log(modalOpen);
  };

  return (
    <button onClick={handleOpen}>
      <BlueTextWithUnderLine>
        접근성, 호환성, 접속성, 개방성
        <ExplanationModal
          open={modalOpen}
          handleClose={handleClose}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        ></ExplanationModal>
      </BlueTextWithUnderLine>
    </button>
  );
};

export default function WhyQCA() {
  return (
    <ExplWrapper>
      <Expl>
        <ExplImg>
          <img src={ExplImage} alt='expl' />
        </ExplImg>
        <ExplText>
          <H1>저희가 대신 할게요</H1>
          QCA는{" "}
          <a href={moisURL} target='_blank' rel='noopener noreferrer'>
            <BlueTextWithUnderLine>전자정부 웹사이트 품질관리 가이드</BlueTextWithUnderLine>
          </a>
          를 기술적으로 구현합니다.
          <br />
          <br /> <LearnMoreModalButton />
          까지 모두 한 곳에서 관리하세요
          <br />
        </ExplText>
      </Expl>
    </ExplWrapper>
  );
}
