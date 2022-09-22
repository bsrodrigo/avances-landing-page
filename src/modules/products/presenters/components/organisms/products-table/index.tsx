import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useProductContext } from "../../../contexts";

const columns: GridColDef[] = [
  { field: "name", headerName: "Produto" },
  { field: "description", headerName: "Descrição" },
  { field: "price", headerName: "Valor", width: 130 },
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
  const { products } = useProductContext();

  console.log({ products });
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
