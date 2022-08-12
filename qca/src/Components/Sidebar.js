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

const closedMixin = (theme, lock) => ({
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
		...closedMixin(theme, lock),
		"& .MuiDrawer-paper": closedMixin(theme, lock),
	}),
}));

export default function SideBar(props) {
	const iconInfo = config.iconInfo;
	const iconImage = [
		<SummarizeIcon />,
		<AccessibilityNewIcon />,
		<CoPresentIcon />,
		<SmartButtonIcon />,
		<ExploreIcon />,
		<ChairIcon />,
		<HomeIcon />,
		<PrintIcon />,
		<HelpIcon />,
	];

	const SideBarItem = icnBarProps => {
		return (
			<ListItem disablePadding>
				<ListItemButton
					sx={{
						minHeight: 48,
						justifyContent: props.open ? "initial" : "center",
						px: 2.5,
					}}
				>
					<ListItemIcon
						sx={{
							minWidth: 0,
							mr: props.open ? 3 : "auto",
							justifyContent: "center",
						}}
					>
						{iconImage[icnBarProps.index]}
					</ListItemIcon>
					<ListItemText
						primary={iconInfo[icnBarProps.index]}
						sx={{ opacity: props.open ? 1 : 0 }}
					/>
				</ListItemButton>
			</ListItem>
		);
	};

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
					<SideBarItem index={0} />
					<SideBarItem index={1} />
					<SideBarItem index={2} />
					<SideBarItem index={3} />
					<SideBarItem index={4} />
					<SideBarItem index={5} />
				</List>
				<Divider />

				<List>
					<SideBarItem index={6} />
					<SideBarItem index={7} />
					<SideBarItem index={8} />
				</List>
			</div>
		</Drawer>
	);
}
