import { Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import styled from "@mui/material/styles/styled";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import config from "../../config.json";
import { Link } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	paddingLeft: theme.spacing(1.5),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export default function TopBar({ sideBarOpen, handleDrawer, targetWebsite }) {
	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: prop => prop !== "open",
	})(({ theme, open }) => ({
		backgroundColor: config.colors.main,
		boxShadow: "none",
		width: "100%",
		margin: "0",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: "0.1s",
		}),
		...(open && {
			// marginLeft: drawerWidth,

			// width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: "0.1s",
			}),
		}),
	}));

	const BeatifulBar = styled(`div`)({
		width: "100%",
		height: "100%",
		backgroundImage: `linear-gradient(90deg, ${config.colors.main}, ${config.colors.main2} 48.71%)`,
	});

	return (
		<AppBar position="fixed" open={sideBarOpen}>
			<div className="w-screen flex justify-between">
				<DrawerHeader className="flex">
					<IconButton className="flex mr-8" onClick={handleDrawer}>
						<MenuIcon />
					</IconButton>
					<div className="ml-4">
						<a
							className=" font-bold text-black hover:cursor-pointer hover:text-blue"
							href={targetWebsite}
							target="_blank"
							rel="noreferrer"
						>
							{targetWebsite}
						</a>
					</div>
				</DrawerHeader>
			</div>
		</AppBar>
	);
}
