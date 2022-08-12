import * as React from "react";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const card = (
	<React.Fragment>
		<Card className="mt-4 h-32 rounded-md">
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					총점
				</Typography>
				<div className="flex item-middle justify-center">
					<Typography variant="h3" component="div">
						89 / 100
					</Typography>
				</div>
				<div className="mt-4">
					<Typography variant="h6" component="div">
						<Button size="small">Learn More</Button>
					</Typography>
				</div>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	</React.Fragment>
);

export default function Score() {
	return <Box className="w-12/12 mr-6">{card}</Box>;
}
