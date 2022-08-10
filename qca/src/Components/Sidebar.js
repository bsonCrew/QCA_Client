import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Typography } from "@mui/material";

export default function SideBar() {
	return (
		<Box className="w-12/12 h-full">
			<div className="h-40 flex">
				<Box className="ml-2 mt-28 font-bold">
					<Typography variant="h5">www.qca.com</Typography>
				</Box>
			</div>
			<Divider />
			<nav aria-label="main mailbox folders">
				<List>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Inbox" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary="Drafts" />
						</ListItemButton>
					</ListItem>
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
