import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import StatCards from "./StatCards";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function Stat() {
	const { data } = useDemoData({
		dataSet: "Employee",
		visibleFields: VISIBLE_FIELDS,
		rowLength: 100,
	});

	let cardData = Array(4).fill(0);

	return (
		<div className="w-12/12 h-[40vh]">
			<StatCards cardData={cardData} />
			<DataGrid {...data} components={{ Toolbar: GridToolbar }} />
		</div>
	);
}
