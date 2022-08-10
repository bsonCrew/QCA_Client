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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import green from "../assets/green.png";
import yellow from "../assets/yellow.png";
import purple from "../assets/purple.png";
import { Typography } from "@mui/material";

const drawerWidth = 240;

const openedMixin = theme => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: "0.1s",
	}),
	overflowX: "hidden",
});

const closedMixin = theme => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: "0.1s",
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
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
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

const icons = [blue, red, green, yellow, purple];
const iconInfo = ["호환성", "접근성", "개방성", "접속성", "편의성"];
const helperInfo = ["결과 내보내기", "도움말", "홈 화면"];

// const

export default function SideBar() {
	const [open, setOpen] = React.useState(false);

	const handleDrawer = () => {
		setOpen(!open);
	};

	const SideBarItem = props => {
		return (
			<ListItem disablePadding>
				<ListItemButton>
					<img
						className="w-8 justify-center"
						src={icons[props.idx]}
						alt={iconInfo[props.idx]}
					/>
					{open ? (
						<ListItemText className="ml-4" primary={iconInfo[props.idx]} />
					) : null}
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
			<Drawer variant="permanent" open={open}>
				<DrawerHeader className="flex align-middle justify-center">
					<IconButton className="flex" onClick={handleDrawer}>
						<MenuIcon />
					</IconButton>
				</DrawerHeader>
				{/* <Divider />s */}
				<List>
					<SideBarItem idx={0} />
					<SideBarItem idx={1} />
					<SideBarItem idx={2} />
					<SideBarItem idx={3} />
					<SideBarItem idx={4} />
				</List>
				<Divider />
				<List>
					{helperInfo.map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: "block" }}>
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
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
