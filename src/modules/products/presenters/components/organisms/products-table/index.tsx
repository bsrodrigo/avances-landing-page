import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "productName", headerName: "Nome do Produto", width: 130 },
  { field: "description", headerName: "Descrição", width: 130 },
];

const rows = [
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
  { id: 1, productName: "Oxigênio", description: "Gás Oxigênio" },
];

export function ProductsTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
