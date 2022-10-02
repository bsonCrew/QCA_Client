import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderWrapper = styled(`div`)({
	width: "80vw",
	paddingLeft: "10vw",
	marginRight: "10vw",
	display: "flex",
	height: "6vh",
	alignItems: "center",
	justifyContent: "space-between",
	fontSize: "1rem",
});

const LinkGroupWrapepr = styled(`div`)({
	width: "30%",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
});

export default function Header() {
	const navigate = useNavigate();

	return (
		<HeaderWrapper>
			<Link to={"/"}> QCA</Link>
			<LinkGroupWrapepr>
				<Link to={"#qca"}>QCA란</Link>
				<Link to={"#howto"}>QCA 사용법</Link>
				<Link to={"#search"}>검사하기</Link>
			</LinkGroupWrapepr>
		</HeaderWrapper>
	);
}
