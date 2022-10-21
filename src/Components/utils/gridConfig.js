const displayColumnConfig = [
	{
		field: "title",
		headerName: "title",
		width: 300,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "score",
		headerName: "score",
		width: 100,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "description",
		headerName: "description",
		width: 900,
		editable: false,
		groupable: false,
		aggregable: false,
	},
];

const printColumnConfig = [
	{
		field: "class",
		headerName: "대분류",
		width: 150,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "subClass",
		headerName: "중분류",
		width: 200,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "spec",
		headerName: "소분류",
		width: 300,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "totalScore",
		headerName: "총점",
		width: 100,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "resultScore",
		headerName: "결과 점수",
		width: 100,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "percentage",
		headerName: "달성률 (%)",
		width: 150,
		editable: false,
		groupable: false,
		aggregable: false,
	},
	{
		field: "itemNum",
		headerName: "사용된 지표 수",
		width: 150,
		editable: false,
		groupable: false,
		aggregable: false,
	},
];

export { displayColumnConfig, printColumnConfig };
