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
import config from "../../config.json";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";

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
	boxShadow: lock === "true" ? "none" : "3px 6rem 40px rgba(0, 0, 0, 0.3)",

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
	<HelpIcon />,
	<PrintIcon />,
	<HomeIcon />,
];

const SideBarLink = ({ openView, sideBarOpen, index }) => {
	const isOpen = config.links[index] === openView;
	return (
		<Link to={config.links[index]}>
			<ListItem
				sx={{
					borderTopRightRadius: index === 0 ? 10 : 0,
					px: 2.5,
					justifyContent: sideBarOpen ? "initial" : "center",
					color: isOpen ? config.colors.blue : config.colors.black,
					backgroundColor: isOpen ? config.colors["gray-light"] : "transparent",
					"&:hover": {
						color: isOpen ? config.colors.blue : "inherit",
						backgroundColor: isOpen
							? config.colors["gray-light"]
							: config.colors.hoverColor,
					},
				}}
				id={index}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: sideBarOpen ? 3 : "auto",
						justifyContent: "center",
						color: isOpen ? config.colors.blue : config.colors.beige,
					}}
				>
					{iconImage[index]}
				</ListItemIcon>
				<ListItemText
					primary={iconInfo[index]}
					sx={{
						opacity: sideBarOpen ? 1 : 0,
						color: isOpen ? config.colors.blue : "inherit",
					}}
				/>
			</ListItem>
		</Link>
	);
};

const SideBarFnc = ({ sideBarOpen, handleClick, index }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton
				sx={{
					justifyContent: sideBarOpen ? "initial" : "center",
					px: 2.5,
					// backgroundColor:
				}}
				onClick={() => handleClick(index)}
				id={index}
			>
				<ListItemIcon
					sx={{
						minWidth: 0,
						mr: sideBarOpen ? 3 : "auto",
						justifyContent: "center",
					}}
				>
					{iconImage[index]}
				</ListItemIcon>
				<ListItemText
					primary={iconInfo[index]}
					sx={{ opacity: sideBarOpen ? 1 : 0 }}
				/>
			</ListItemButton>
		</ListItem>
	);
};

export default function SideBar({ targetWebsite, openView }) {
	const [lock, setLock] = React.useState(false);
	const [sideBarOpen, setSideBarOpen] = React.useState(false);

	const handleDrawer = () => {
		setSideBarOpen(!sideBarOpen);
		setLock(true);
	};

	const closeDrawer = () => {
		if (!lock && sideBarOpen) setSideBarOpen(false);
	};

	const openDrawer = () => {
		if (!lock) {
			setSideBarOpen(true);
		}
	};

	return (
		<>
			<TopBar
				open={sideBarOpen}
				handleDrawer={handleDrawer}
				targetWebsite={targetWebsite}
			/>
			<Drawer
				variant="permanent"
				open={sideBarOpen}
				lock={lock.toString()}
				onMouseOver={openDrawer}
				onMouseOut={closeDrawer}
				className="bg-main"
			>
				<div className="mt-16 h-full rounded-2xl bg-main">
					<List>
						{[0, 1, 2, 3, 4].map(idx => {
							return (
								<SideBarLink
									key={idx}
									index={idx}
									sideBarOpen={sideBarOpen}
									openView={openView}
								/>
							);
						})}
					</List>
					<Divider />

					<List>
						{[5, 6, 7].map(idx => {
							return (
								<SideBarFnc
									key={idx}
									index={idx}
									sideBarOpen={sideBarOpen}
									handleClick={() => alert(idx)}
								/>
							);
						})}
					</List>
				</div>
			</Drawer>
		</>
	);
}
