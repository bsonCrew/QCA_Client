import React from "react";
import useFormedAudits from "../../Hooks/useFormedAudits";
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
	width: "80vw",
	height: "75vh",
});

export default function AuditsDataGrid({ targetWebsite, status }) {
	const formedAudits = useFormedAudits(targetWebsite);
	console.log(status);

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
