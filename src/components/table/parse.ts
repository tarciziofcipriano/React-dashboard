import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "key",
    headerName: "Marca",
    width: 190,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "value",
    headerName: "Valor",
    type: "number",
    width: 190,
    align: "center",
    headerAlign: "center",
  },
];
