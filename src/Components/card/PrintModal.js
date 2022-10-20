import Dialog from "@mui/material/Dialog";
import React from "react";
import { CSVLink } from "react-csv";
import useQualification from "../../Hooks/useQualification";
import { DataGrid } from "@mui/x-data-grid";
import { printColumnConfig } from "../utils/gridConfig.js";

import styled from "@emotion/styled";
import { HBlue } from "../../Themes/CustomStyled";

import config from "../../config.json";

const SpecStatWrapper = styled.div({
	display: "flex",
	width: "100%",
	height: "100%",
	flexDirection: "column",
	justifyContent: "space-between",
});

const StyledDialog = styled(Dialog)({
	width: "100%",
	minHeight: "600px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export function DownloadCSV({ csvData, filename }) {
	const data = csvData;

	const headers = printColumnConfig.map(x => ({
		label: x.headerName,
		key: x.field,
	}));

	return (
		<HBlue>
			<CSVLink filename={filename} data={data} headers={headers}>
				미리보기
			</CSVLink>
		</HBlue>
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
	height: "80vh",
});

const traverseData = data => {
	const stack = [];
	const evaluation = config.evaluation;

	for (let i = 0; i < data.length; i++) {
		Object.entries(data[i])
			.filter(x => x[0] !== "resultScore" && x[0] !== "totalScore")
			.forEach(([subClassKey, subClassVal]) => {
				Object.entries(subClassVal)
					.filter(x => x[0] !== "resultScore" && x[0] !== "totalScore")
					.forEach(([specKey, specVal], idx) => {
						const items = specVal.items.map(item => {
							return item;
						});
						stack.push({
							class: evaluation[i],
							subClass: subClassKey,
							spec: specKey,
							id: specVal.title,
							itemNum: specVal.items.length,
							totalScore: specVal.totalScore,
							resultScore: specVal.resultScore,
							percentage:
								specVal.totalScore !== 0
									? (specVal.resultScore / specVal.totalScore) * 100 + "%"
									: "100%",
						});
					});
			});
	}

	const res = {
		columns: printColumnConfig,
		rows: stack,
		initialState: {
			columns: {
				columnVisibilityModel: {
					id: false,
				},
			},
		},
	};

	return res;
};

export default function PrintModal({ data, open, handleClose, targetWebsite }) {
	let [status, lighthouseData, classification, robot] =
		useQualification(targetWebsite);

	const [formedData, setFormedData] = React.useState([]);

	React.useEffect(() => {
		if (classification.length) setFormedData(traverseData(classification));
	}, [classification]);

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
					filename={"QCA 결과파일"}
				></DownloadCSV>
				<StyledDatagrid
					{...formedData}
					// getRowClassName={params => `super-app-theme--${params.row.status}`}
					checkboxSelection
				/>
			</div>
		</StyledDialog>
	);
}
