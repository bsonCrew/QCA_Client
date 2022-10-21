import Dialog from "@mui/material/Dialog";
import React from "react";
import { CSVLink } from "react-csv";
import useQualification from "../../Hooks/useQualification";
import Button from "@mui/material/Button";
import AuditsDataGrid from "../chart/AuditsDataGrid";
import { DataGrid } from "@mui/x-data-grid";
import { printColumnConfig } from "../utils/gridConfig.js";
import useFormedAudits from "../../Hooks/useFormedAudits";

import styled from "@emotion/styled";

import config from "../../config.json";
import BeautifulBar from "../layout/BeautifulBar";

const StyledDialog = styled(Dialog)({
	width: "100%",
	minHeight: "600px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const DownloadButton = styled(Button)({
	fontSize: "min(1.3vw, 1.2em)",
	height: "min(8vh, 45px)",
	backgroundColor: config.colors.main2,
	margin: "1vh 0 1vh 0",
});

export function DownloadCSV({ csvData, filename }) {
	const data = csvData;

	const headers = printColumnConfig.map(x => ({
		label: x.headerName,
		key: x.field,
	}));

	return (
		<DownloadButton>
			<CSVLink filename={filename} data={data} headers={headers}>
				여기를 눌러 다운로드하세요
			</CSVLink>
		</DownloadButton>
	);
}

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

export default function PrintModal({
	status,
	open,
	handleClose,
	targetWebsite,
}) {
	const formedData = useFormedAudits(targetWebsite);

	return (
		<StyledDialog
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			fullWidth
			maxWidth="xl"
		>
			<div className="w-fit h-100 p-12">
				<DownloadCSV
					csvData={formedData.rows}
					filename={`QCA 테스트 결과 ${targetWebsite}`}
				/>
				<BeautifulBar height={1} />
				<AuditsDataGrid targetWebsite={targetWebsite} status={"success"} />
			</div>
		</StyledDialog>
	);
}
