import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import PrintIcon from "@mui/icons-material/Print";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import DevicesIcon from "@mui/icons-material/Devices";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import BoltIcon from "@mui/icons-material/Bolt";
import DownloadIcon from "@mui/icons-material/Download";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";

import config from "../../../config.json";

const iconInfo = config.iconInfo;
const iconImage = [
  <SummarizeIcon />,
  <DevicesIcon />,
  <AccessibilityNewIcon />,
  <SmartButtonIcon />,
  <BoltIcon />,
  <DownloadIcon />,
  <PrintIcon />,
  <HomeIcon />,
];

const SideBarFnc = ({ sideBarOpen, handleClick, index }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{
          justifyContent: sideBarOpen ? "initial" : "center",
          px: 2.5,
          // backgroundColor:
        }}
        onClick={handleClick}
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
        <ListItemText primary={iconInfo[index]} sx={{ opacity: sideBarOpen ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

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
            backgroundColor: isOpen ? config.colors["gray-light"] : config.colors.hoverColor,
          },
        }}
        id={index}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: sideBarOpen ? 3 : "auto",
            justifyContent: "center",
            color: isOpen ? config.colors.blue : config.bgcolors.beige,
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

export { SideBarFnc, SideBarLink };
