import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const NewCard = styled(Card)(({ theme }) => ({
	// width: 300,
	// height: 300,
	borderRadius: "10px",
	backgroundColor: "primary.dark",
	"&:hover": {
		backgroundColor: "primary.main",
		opacity: [0.9, 0.8, 0.7],
	},
}));
