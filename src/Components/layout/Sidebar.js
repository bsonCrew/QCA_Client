import * as React from "react";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { SideBarFnc, SideBarLink } from "./SideBarFnc";
import TopBar from "./TopBar";
import PrintModal from "../card/PrintModal";

import config from "../../config.json";

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

function SideBar({ targetWebsite, openView }) {
	const [lock, setLock] = React.useState(false);
	const [sideBarOpen, setSideBarOpen] = React.useState(false);

	const [modalOpen, setModalOpen] = React.useState(false);
	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const navigate = useNavigate();

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

	const printPage = () => {
		setSideBarOpen(false);
		setTimeout(() => {
			window.print();
		}, [100]);
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
				<div className="mt-16 h-full rounded-tr-2xl bg-main">
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
						<SideBarFnc
							sideBarOpen={sideBarOpen}
							handleClick={handleModalOpen}
							index={5}
						></SideBarFnc>
						<SideBarFnc
							sideBarOpen={sideBarOpen}
							handleClick={printPage}
							index={6}
						/>
						<SideBarFnc
							sideBarOpen={sideBarOpen}
							handleClick={() => navigate("/")}
							index={7}
						/>
					</List>
				</div>
				<PrintModal
					open={modalOpen}
					handleClose={() => setModalOpen(false)}
					onClose={() => setModalOpen(false)}
					targetWebsite={targetWebsite}
				/>
			</Drawer>
		</>
	);
}

export default React.memo(SideBar);
