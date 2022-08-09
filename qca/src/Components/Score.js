import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
	<Box
		component="span"
		sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
	>
		•
	</Box>
);

const card = (
	<React.Fragment>
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				총점
			</Typography>
			<Typography variant="h3" component="div">
				89 / 100
			</Typography>
			<Button size="small">Learn More</Button>

			<br />
			<br />
		</CardContent>
		<CardActions></CardActions>
	</React.Fragment>
);

export default function Score() {
	return <Box className="w-3/12">{card}</Box>;
}
