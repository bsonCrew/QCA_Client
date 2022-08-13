import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import PrintIcon from "@mui/icons-material/Print";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import ExploreIcon from "@mui/icons-material/Explore";
import ChairIcon from "@mui/icons-material/Chair";
import HelpIcon from "@mui/icons-material/Help";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import config from "../config.json";

const drawerWidth = 240;

const openedMixin = (theme, lock) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: "0.1s",
	}),
	backgroundColor: "transparent",
	border: "none",

	borderRadius: 10,
	boxShadow: lock === "true" ? "none" : "3px 6rem 10px rgba(0, 0, 0, 0.3)",

	overflowX: "hidden",
});

const closedMixin = theme => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: "0.1s",
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)})`,
	backgroundColor: "transparent",
	borderRadius: 10,
	border: "none",

	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)})`,
	},
});

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== "open",
})(({ theme, open, lock }) => ({
	backgroundColor: config.colors.main,
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	borderRadius: 10,

	...(open && {
		...openedMixin(theme, lock),
		"& .MuiDrawer-paper": openedMixin(theme, lock),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

const iconInfo = config.iconInfo;
const iconImage = [
	<SummarizeIcon />,
	<AccessibilityNewIcon />,
	<CoPresentIcon />,
	<SmartButtonIcon />,
	<ExploreIcon />,
	<ChairIcon />,
	<HelpIcon />,
	<PrintIcon />,
	<HomeIcon />,
];

const SideBarItem = ({ open, handleClick, index }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton
				sx={{
					minHeight: 48,
					justifyContent: open ? "initial" : "center",
					px: 2.5,
					// backgroundColor:
				}}
				onClick={() => handleClick(index)}
				id={index}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: open ? 3 : "auto",
						justifyContent: "center",
					}}
				>
					{iconImage[index]}
				</ListItemIcon>
				<ListItemText
					primary={iconInfo[index]}
					sx={{ opacity: open ? 1 : 0 }}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default function SideBar(props) {
	return (
		<Drawer
			variant="permanent"
			open={props.open}
			lock={props.lock.toString()}
			onMouseOver={props.openDrawer}
			onMouseOut={props.closeDrawer}
			className="bg-main"
		>
			<div className="mt-16 h-full rounded-2xl bg-main">
				<List>
					{[0, 1, 2, 3, 4, 5].map(idx => {
						return (
							<SideBarItem
								handleClick={props.handleViewItemClick}
								key={idx}
								index={idx}
								open={props.open}
							/>
						);
					})}
				</List>
				<Divider />

				<List>
					{[6, 7, 8].map(idx => {
						return (
							<SideBarItem
								handleFunctionItemClick={props.handleFunctionItemClick}
								key={idx}
								index={idx}
								open={props.open}
							/>
						);
					})}
				</List>
			</div>
		</Drawer>
	);
}
