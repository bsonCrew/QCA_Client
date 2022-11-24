import { HBlue, H3Gray } from "../../Themes/CustomStyled";
import styled from "@emotion/styled";

const PhraseWrapper = styled.div({
  widht: "100%",
  display: "flex",
  flexDirection: "column",
});

const Phrase = ({ title, subtitle }) => {
  return (
    <PhraseWrapper>
      <HBlue>{title}</HBlue>
      <H3Gray>{subtitle}</H3Gray>
    </PhraseWrapper>
  );
};

export default Phrase;
