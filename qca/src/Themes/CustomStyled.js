import styled from "@emotion/styled";
import config from "../config.json";

const HBlue = styled(`span`)({
	padding: "10vh 0 1vh 2vw",
	width: "100%",
	fontWeight: 700,
	fontSize: "min(1.8rem, 5vw)",
	color: config.colors.blue,
});

const HWhite = styled(`span`)({
	margin: "0 0 20vh 2vw",
	width: "100%",
	fontWeight: 500,
	fontSize: "1rem",
	color: config.colors.white,
});

const HBlack = styled(`span`)({
	padding: "0 0 2vh 2vw",
	width: "100%",
	fontWeight: 600,
	fontSize: "min(1.6rem, 4vw)",
	color: config.colors.black,
});

const H2Gray = styled(`span`)({
	padding: "0 0 6vh 2vw",
	width: "100%",
	fontWeight: 600,
	fontSize: "min(1rem, 3vw)",
	color: config.colors.gray,
});

const H3Gray = styled(`span`)({
	margin: "0 0 2vh 2vw",
	width: "100%",
	fontWeight: 500,
	fontSize: "1rem",
	color: config.colors.gray,
});

const BlueText = styled(`span`)({
	color: config.colors.blue,
});
const RedText = styled(`span`)({
	color: config.colors.redText,
});

export { HBlue, HBlack as H2Black, BlueText, HWhite, RedText, H2Gray, H3Gray };
