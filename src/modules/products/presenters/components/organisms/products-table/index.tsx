import { currencyFormatted } from "@/modules/core/utils";
import { Product } from "@/modules/products/domain";
import {
  DeleteOutlineOutlined as DeleteOutlineOutlinedIcon,
  EditOutlined as EditOutlinedIcon,
} from "@mui/icons-material";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useProductContext } from "../../../contexts";
import { DeleteProduct } from "../../molecules";

const columns: any[] = [
  { id: "table-product-product", label: "Produto" },
  { id: "table-product-description", label: "Descrição" },
  { id: "table-product-price", label: "Valor" },
  { id: "table-product-actions", label: "" },
];

interface IProductsTable {
  onEdit: (id: string) => void;
}

export const ProductsTable: React.FC<IProductsTable> = ({ onEdit }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [productSelected, setProductSelected] = useState<Product>(null!);

  const { products } = useProductContext();

  const handleOpen = (product: Product): void => {
    if (!product?.id) null;

    setProductSelected(product);
    setOpen(true);
  };

  const handleClose = (): void => {
    setProductSelected(null!);
    setOpen(false);
  };

  const handleDelete = async (id: string): Promise<void> => {
    console.log("deletou");
  };

  productSelected;

  return (
    <>
      <TableContainer
        style={{
          overflowX: "auto",
          position: "relative",
          height: "60vh",
        }}
      >
        <Table
          style={{
            position: "absolute",
          }}
        >
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow hover key={`${product?.id}-${index}`}>
                <TableCell key={`${product?.id}-name`}>
                  {product?.name || "-"}
                </TableCell>
                <TableCell key={`${product?.id}-description`}>
                  {product?.description || "-"}
                </TableCell>
                <TableCell key={`${product?.id}-price`}>
                  {product?.price ? currencyFormatted(product.price) : "-"}
                </TableCell>
                <TableCell key={`${product?.id}-actions`}>
                  <IconButton
                    color="primary"
                    onClick={() => onEdit(product?.id!)}
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleOpen(product)}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteProduct
        onClose={handleClose}
        onDelete={handleDelete}
        open={open}
        product={productSelected}
      />
    </>
  );
};
