import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

import styled from "@emotion/styled";
import config from "../../../config.json";

const LabelLink = styled(`div`)({
  marginTop: "2vh",
  color: "white",
  fontWeight: "bold",
});

const StyledFab = styled(Fab)({
  backgroundColor: config.colors.white,
  fontWeight: "bold",
});

const ShortCut = ({ label, homepage }) => {
  return (
    <div className='items-center justify-center w-36 mt-5 text-center'>
      <Link
        to={{
          pathname: "/dashboard",
        }}
        state={{ targetWebsite: homepage }}

        // onClick={() => {
        // 	console.log(homepage);
        // }}
      >
        <StyledFab color='kblue' aria-label='add' className='mx-16 font-bold'>
          {label?.slice(0, 1)}
        </StyledFab>
      </Link>
      <LabelLink>{label}</LabelLink>
    </div>
  );
};

export default ShortCut;
