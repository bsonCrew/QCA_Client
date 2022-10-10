import * as React from "react";

import Skeleton from "@mui/material/Skeleton";
import ExplanationModal from "./ExplanationModal";
import config from "../../config.json";
import BeautifulBar from "../layout/BeautifulBar";
import styled from "@emotion/styled";

import { H3Gray, H2Black, H2Gray } from "../../Themes/CustomStyled";
import Button from "@mui/material/Button";

const CardWrapper = styled(`div`)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
});

const DisplayWrapper = styled(`div`)({
	width: "100%",
	fontSize: "min(1.8rem, 5vw)",
});

const DisplayButton = styled(Button)({
	boxShadow: "",
});

const FeatureCardWrapper = styled(`button`)({
	width: "26%",
	minWidth: "280px",
	// flexGrow: "1",
	height: "50vh",
	backgroundColor: config.colors.white,
	boxShadow: `${config.colors["gray-light"]} 10px 10px 20px`,
	margin: "1vw",
	padding: "3rem",
	borderRadius: "2rem",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	justifyContent: "center",
});

export default function ExplanationCard({
	targetWebsite,
	targetWebsiteScore,
	status,
}) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const catchPhrase = score => {
		if (score > 80) return config.scorePhrase[0];
		else if (score > 60) return config.scorePhrase[1];
		else if (score > 40) return config.scorePhrase[2];
		else if (score > 20) return config.scorePhrase[3];
		else return config.scorePhrase[4];
	};

	return (
		<CardWrapper>
			<ExplanationModal
				open={open}
				handleClose={handleClose}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			/>
			<BeautifulBar height={3} flatBottom={true} />
			{status === "success" ? (
				<FeatureCardWrapper
					// role="button"
					// className="h-64 rounded-b-xl shadow-lg hover:shadow-2xl flex flex-col p-14 px-16 justify-center"
					onClick={handleOpen}
				>
					<DisplayWrapper>
						{catchPhrase(targetWebsiteScore[6])}
						<br />
						<H2Black>{`${targetWebsite}의 총점은 ${Math.floor(
							targetWebsiteScore[6]
						)}점입니다.`}</H2Black>
						<br />
						<H3Gray>
							{config.evaluation[0]} 점수는 <b>{targetWebsiteScore[0]}점</b>,{" "}
							{config.evaluation[1]} 점수는 <b>{targetWebsiteScore[1]}점</b>,{" "}
							{config.evaluation[2]} 점수는 <b>{targetWebsiteScore[2]}점</b>,{" "}
							{config.evaluation[3]} 점수는 <b>{targetWebsiteScore[3]}점</b>
							입니다.
						</H3Gray>
					</DisplayWrapper>
				</FeatureCardWrapper>
			) : (
				<Skeleton variant="rounded" height={270} />
			)}
		</CardWrapper>
	);
}
