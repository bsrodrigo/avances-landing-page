import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useProductContext } from "../../../contexts";

const columns: GridColDef[] = [
  { field: "name", headerName: "Produto", width: 300 },
  { field: "description", headerName: "Descrição", width: 400 },
  { field: "price", headerName: "Valor" },
];

export function ProductsTable() {
  const { products } = useProductContext();

  console.log({ products });
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={products.map((item) => ({
          ...item,
          price: (item.price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
        }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
