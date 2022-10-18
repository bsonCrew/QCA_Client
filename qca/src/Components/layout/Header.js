import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import config from "../../config.json";

const HeaderWrapper = styled(`div`)({
	position: "sticky",
	top: "0",
	width: "100%",
	padding: "0 max(16vw,20px) 0 max(16vw,20px)",
	display: "flex",
	height: "max(6vh,60px)",
	alignItems: "center",
	justifyContent: "space-between",
	fontSize: "1rem",
	zIndex: "100",
	borderBottom: "1px solid #e0e0e0",
	backgroundColor: config.colors.main,
});

const ButtonGroup = styled(`div`)({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
});

export default function Header({ link, executeScroll }) {
	return (
		<HeaderWrapper>
			<Button href={"/"}>QCA</Button>
			<ButtonGroup>
				<Button onClick={() => executeScroll(link.current)} href={"#qca"}>
					QCA란
				</Button>
				<Button href={"#howto"}>사용법</Button>
				<Button href={"#search"}>검사</Button>
			</ButtonGroup>
		</HeaderWrapper>
	);
}
