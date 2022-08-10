import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

const iconInfo = ["호환성", "접근성", "개방성", "접속성", "편의성"];

const SideBarItem = props => {
	let iconColors = ["blue", "red", "green", "yellow", "gray"];
	let iconColor = "w-8 h-8 mr-4 rounded-xl bg-" + iconColors[props.idx];

	return (
		<ListItem disablePadding>
			<ListItemButton>
				<div className={iconColor}></div>
				<ListItemText primary={iconInfo[props.idx]} />
			</ListItemButton>
		</ListItem>
	);
};

export default function SideBar() {
	return (
		<Box className="w-12/12 h-full">
			<div className="h-40 flex flex-col">
				<Button>
					<MenuIcon className="w-40 h-40" />
				</Button>
				<Box className="ml-2 mt-24 font-bold">
					<Typography variant="h5">www.qca.com</Typography>
				</Box>
			</div>
			<Divider />
			<nav aria-label="main mailbox folders">
				<List>
					<SideBarItem idx={0} />
					<SideBarItem idx={1} />
					<SideBarItem idx={2} />
					<SideBarItem idx={3} />
					<SideBarItem idx={4} />
				</List>
			</nav>
			<Divider />
			<nav aria-label="secondary mailbox folders">
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemText primary="Trash" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText primary="Spam" />
						</ListItemButton>
					</ListItem>
				</List>
			</nav>
		</Box>
	);
}
