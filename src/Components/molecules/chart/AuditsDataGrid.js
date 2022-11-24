import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import styled from "@emotion/styled";
import Skeleton from "@mui/material/Skeleton";

const StyledDatagrid = styled(DataGrid)({
  "& .MuiDataGrid-root": {
    fontSize: "10px",
    color: "black",
  },
  "& .MuiTablePagination-select": {
    fontSize: "12px",
  },
  // marginLeft: "min(5vw, 50px)",
  width: "100%",
  height: "75vh",
});

export default function AuditsDataGrid({ formedAudits, status }) {
  return (
    <>
      {status === "success" ? (
        <StyledDatagrid {...formedAudits} checkboxSelection />
      ) : (
        <Skeleton sx={{ width: "100%", height: 800, marginTop: -22 }} />
      )}
    </>
  );
}
