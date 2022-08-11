import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import PrintIcon from "@mui/icons-material/Print";
import HelpIcon from "@mui/icons-material/Help";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import green from "../assets/green.png";
import yellow from "../assets/yellow.png";
import purple from "../assets/purple.png";
import config from "../config.json";
import { Typography } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme, lock) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: "0.1s",
	}),
	borderRight: lock ? "solid 1px #bfbfbf" : "none",
	boxShadow: lock ? "none" : "0px 0px 10px rgba(0, 0, 0, 0.3)",

	overflowX: "hidden",
});

const closedMixin = (theme, lock) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: "0.1s",
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	borderRight: lock ? "none" : "solid 1px #bfbfbf",

	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	backgroundColor: "#F5F8FC",
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	paddingLeft: theme.spacing(1.5),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
	backgroundColor: "#F5F8FC",
	boxShadow: "none",
	width: `calc(100% - 4rem)`,

	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: "0.1s",
	}),
	...(open && {
		marginLeft: drawerWidth,

		// width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: "0.1s",
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== "open",
})(({ theme, open, lock }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme, lock),
		"& .MuiDrawer-paper": openedMixin(theme, lock),
	}),
	...(!open && {
		...closedMixin(theme, lock),
		"& .MuiDrawer-paper": closedMixin(theme, lock),
	}),
}));

const icons = [blue, red, green, yellow, purple];
const iconInfo = config.info;
const helperInfo = config.helperInfo;
const helperIcon = [
	<SummarizeIcon />,
	<HomeIcon />,
	<PrintIcon />,
	<HelpIcon />,
];

// const

export default function SideBar() {
	const [open, setOpen] = React.useState(false);
	const [lock, setLock] = React.useState(false);

	const handleDrawer = () => {
		setOpen(open);
		setLock(!lock);
	};

	const closeDrawer = () => {
		if (!lock && open) setOpen(false);
	};

	const openDrawer = () => {
		if (!lock) {
			setOpen(true);
		}
	};

	const SideBarItem = props => {
		return (
			<ListItem disablePadding>
				<ListItemButton>
					<img
						className="w-8 p-1 justify-center"
						src={icons[props.index]}
						alt={iconInfo[props.index]}
					/>
					{open ? (
						<ListItemText className="ml-4" primary={iconInfo[props.index]} />
					) : null}
				</ListItemButton>
			</ListItem>
		);
	};

	const IconBarItem = props => {
		return (
			<ListItem disablePadding sx={{ display: "block" }}>
				<ListItemButton
					sx={{
						minHeight: 48,
						justifyContent: open ? "initial" : "center",
						px: 2.5,
					}}
				>
					<ListItemIcon
						sx={{
							minWidth: 0,
							mr: open ? 3 : "auto",
							justifyContent: "center",
						}}
					>
						{helperIcon[props.index]}
					</ListItemIcon>
					<ListItemText
						primary={helperInfo[props.index]}
						sx={{ opacity: open ? 1 : 0 }}
					/>
				</ListItemButton>
			</ListItem>
		);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<div className="w-full flex justify-between">
						<Typography variant="h5" color="#1f1f1f">
							www.gov24.com
						</Typography>
						<Typography variant="h5" color="#1f1f1f">
							www.gov24.com
						</Typography>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				open={open}
				lock={lock.toString()}
				onMouseOver={openDrawer}
				onMouseOut={closeDrawer}
			>
				<DrawerHeader className="flex align-middle justify-center">
					<IconButton className="flex" onClick={handleDrawer}>
						<MenuIcon />
					</IconButton>
				</DrawerHeader>
				<List>
					<IconBarItem index={0} />
					<SideBarItem index={0} />
					<SideBarItem index={1} />
					<SideBarItem index={2} />
					<SideBarItem index={3} />
					<SideBarItem index={4} />
				</List>
				<Divider />

				<List>
					<IconBarItem index={1} />
					<IconBarItem index={2} />
					<IconBarItem index={3} />
				</List>
			</Drawer>
			{/* <Divider orientation="vertical" className="h-screen" /> */}
		</Box>
	);
}
