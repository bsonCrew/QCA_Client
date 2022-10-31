import { DataGrid } from "@mui/x-data-grid";
import styled from '@emotion/styled';

const StyledDatagrid = styled(DataGrid)({
    '& .MuiDataGrid-root': {
        fontSize: '10px',
        color: 'black',
    },
    '& .MuiTablePagination-select': {
        fontSize: '12px',
    },
    width: '100%',
    height: '400px',
});

const ItemGrid = ({ headings, items }) => {

    const columns = headings.map((heading) => {
        return ({
            field: heading.key,
            headerName: heading.label,
            // width: "auto",
            editable: false,
            groupable: false,
            aggregable: false,

        })
    });

    const rowKey = columns[0]?.field;

    const rows = items.map((item, idx) => ({
        field: item[rowKey] + item.valueType,
        id: idx,
        ...item,
    }));

    console.log("rowKey: ", rowKey);
    console.log("rows: ", rows);
    console.log("headings: ", headings);

    return (<div>
        {rows.length > 0 && <StyledDatagrid rows={rows} columns={columns} />}
    </div>)
}

export default ItemGrid;