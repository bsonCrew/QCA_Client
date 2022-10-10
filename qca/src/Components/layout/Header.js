import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import config from "../../config.json";

const HeaderWrapper = styled(`div`)({
	position: "sticky",
	top: "0",
	width: "100vw",
	padding: "0 18vw 0 18vw",
	display: "flex",
	height: "6vh",
	alignItems: "center",
	justifyContent: "space-between",
	fontSize: "1rem",
	zIndex: "100",
	borderBottom: "1px solid #e0e0e0",
	backgroundColor: config.colors.main,
});

const LinkGroupWrapper = styled(`div`)({
	width: "30%",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

export default function Header({ link, executeScroll }) {
	return (
		<HeaderWrapper>
			<Button href={"/"}>QCA</Button>
			<LinkGroupWrapper>
				<Button onClick={() => executeScroll(link.current)} href={"#qca"}>
					QCA란
				</Button>
				<Button href={"#howto"}>QCA 사용법</Button>
				<Button href={"#search"}>검사하기</Button>
			</LinkGroupWrapper>
		</HeaderWrapper>
	);
}
