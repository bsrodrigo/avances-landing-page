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
import { useProductContext } from "@/modules/products/presenters/contexts";

const columns: any[] = [
  { id: "table-product-product", label: "Produto" },
  { id: "table-product-quantity", label: "Quantidade" },
  { id: "table-product-updatedAt", label: "Última Atualização" },
  { id: "table-product-actions", label: "" },
];

interface IInventoryTable {
  onDelete: (id: Product) => void;
  onEdit: (id: Product) => void;
}

export const InventoryTable: React.FC<IInventoryTable> = ({
  onDelete,
  onEdit,
}) => {
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
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell>Pastel de Flango</TableCell>
              <TableCell align="center">134</TableCell>
              <TableCell>07/09/22 às 12:03</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <EditOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
