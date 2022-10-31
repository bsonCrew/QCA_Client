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

export default function Header({ scrollRefs }) {
	const executeScroll = ref =>
		ref.current.scrollIntoView({ behavior: "smooth" });

	const hrefs = ["#qca", "#howto", "#algorithm", "#search"];
	const nameSpace = ["QCA란", "사용법", "알고리즘", "검사"];

	return (
		<HeaderWrapper>
			<Button onClick={() => executeScroll(scrollRefs[0])}>QCA</Button>
			<ButtonGroup>
				{scrollRefs.slice(1, 5).map((ref, idx) => {
					return (
						<Button
							key={idx}
							onClick={() => executeScroll(ref)}
							href={hrefs[idx]}
						>
							{nameSpace[idx]}
						</Button>
					);
				})}

				{/* <Button href={"#howto"}>사용법</Button>
				<Button href={"#search"}>검사</Button> */}
			</ButtonGroup>
		</HeaderWrapper>
	);
}
