import styled from "@emotion/styled";
import config from "../config.json";

const HBlue = styled(`span`)({
	margin: "10vh 0 1vh 0",
	width: "60vw",
	fontWeight: 700,
	fontSize: "min(1.8rem, 5vw)",
	color: config.colors.blue,
});

const H2Black = styled(`span`)({
	margin: "0 0 2vh 0%",
	width: "60%",
	fontWeight: 600,
	fontSize: "min(1.2rem, 3vw)",
	color: config.colors.black,
});

const H2Gray = styled(`span`)({
	margin: "0 0 2vh 0%",
	width: "60%",
	fontWeight: 600,
	fontSize: "min(1rem, 3vw)",
	color: config.colors.gray,
});

const H3Gray = styled(`span`)({
	margin: "0 0 2vh 0%",
	width: "60%",
	fontWeight: 500,
	fontSize: "1rem",
	color: config.colors.gray,
});

export { HBlue, H2Black, H2Gray, H3Gray };
