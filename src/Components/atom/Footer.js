import styled from "@emotion/styled";
import config from "../../config.json";

const FooterWrapper = styled.div({
  display: "flex",
  height: "8vh",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddingLeft: "10% 40% 10% 40%",
  backgroundColor: config.colors.main,
  textAlign: "center",
});

const FooterText = styled.div({
  textAlign: "center",
  fontWeight: "bold",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});

const LinkText = styled.a({
  margin: "0 0.3rem 0 0.3rem",
  color: "red",
});
export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        Project contributor:
        <LinkText href='https://github.com/bsonCrew' target='_blank' rel='noopener noreferrer'>
          bson crew.
        </LinkText>
        All rights reserved © 2022 - {new Date().getFullYear()}
      </FooterText>
    </FooterWrapper>
  );
}
