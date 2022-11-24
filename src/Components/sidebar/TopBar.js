import MuiAppBar from "@mui/material/AppBar";
import styled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import config from "../../config.json";

const DrawerHeader = styled("div")(({ theme }) => ({
  width: "100%",
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

const DrawerContentWrapper = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  color: "black",
  padding: "0 8vw 0 0vw",
});

const DrawerContentLink = styled(`a`)({
  marginLeft: "2vw",
  fontWeight: "bold",
  color: config.colors.blue,
  ":hover": {
    cursor: "pointer",
  },
});

const CatchPhrase = styled("div")(({ theme }) => ({
  marginLeft: "1vw",
  fontWeight: "bold",
}));

const RequestDateCatchPhrase = ({ recentRequestedDate, targetWebsite }) => {
  const displayDate = recentRequestedDate.split("T")[0];

  return (
    <>
      <DrawerContentLink href={targetWebsite} target='_blank' rel='noreferrer'>
        {targetWebsite}
      </DrawerContentLink>
      <CatchPhrase>{displayDate} 일 검사 결과입니다. </CatchPhrase>
    </>
  );
};

export default function TopBar({ sideBarOpen, handleDrawer, targetWebsite, recentRequestedDate }) {
  return (
    <AppBar position='fixed' open={sideBarOpen}>
      <div className='w-screen flex justify-between'>
        <DrawerHeader>
          <IconButton className='flex mr-8' onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
          <DrawerContentWrapper>
            <RequestDateCatchPhrase
              targetWebsite={targetWebsite}
              recentRequestedDate={recentRequestedDate}
            />
          </DrawerContentWrapper>
        </DrawerHeader>
      </div>
    </AppBar>
  );
}
