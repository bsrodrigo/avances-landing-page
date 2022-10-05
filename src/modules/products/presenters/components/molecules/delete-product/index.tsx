import { useState } from "react";

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { Typography } from "@/modules/core/presenters/components/atoms";
import { Product } from "@/modules/products/domain";

interface IDeleteProduct {
  open: boolean;
  product: Product;
  onClose: () => void;
  onDelete: (id: string) => Promise<void>;
}

export const DeleteProduct: React.FC<IDeleteProduct> = ({
  open,
  product,
  onClose,
  onDelete,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async (): Promise<void> => {
    await onDelete(product?.id!);
    setLoading(true);
    onClose();
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { width: "70%", maxHeight: "90%", maxWidth: 960 },
      }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle color={(theme) => theme.palette.grey[800]}>
        <Typography variant="h6" color={(theme) => theme.palette.grey[800]}>
          Deletar Produto
        </Typography>
        <Typography variant="body1" color={(theme) => theme.palette.grey[600]}>
          Atenção, Você está deletando um produto!
        </Typography>
      </DialogTitle>

      <DialogContent dividers>
        <Typography variant="body1" color={(theme) => theme.palette.grey[800]}>
          Se você continuar, estará deletando o produto:
          <b> {product?.name || " - "}</b> e não poderá usa-lo novamente. Essa
          ação não poderá ser desfeita!
        </Typography>
        <br />
        <Typography variant="body1" color={(theme) => theme.palette.grey[800]}>
          <b>Realmente deseja deletar?</b>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          disabled={loading}
          endIcon={loading && <CircularProgress size={16} />}
        >
          Deletar
        </Button>
        <Button disabled={loading} onClick={onClose}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
