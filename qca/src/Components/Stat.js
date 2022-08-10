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

	return (
		<div className="w-full h-[50vh]">
			<DataGrid {...data} components={{ Toolbar: GridToolbar }} />
		</div>
	);
}
