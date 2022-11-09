import { DataGrid } from "@mui/x-data-grid";
import { dataValuesTable } from "../../parse";
import { columns } from "./parse";

const Table = () => {
  return (
    <div style={{ height: 326, width: "100%" }}>
      <DataGrid
        rows={dataValuesTable!}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Table;
