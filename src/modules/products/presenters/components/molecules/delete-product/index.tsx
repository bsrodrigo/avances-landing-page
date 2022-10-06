import { useState } from "react";

import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { Typography } from "@/modules/core/presenters/components/atoms";
import { Dialog } from "@/modules/core/presenters/components/molecules";
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
    setLoading(true);
    await onDelete(product?.id!);
    setLoading(false);
    onClose();
  };

  return (
    <Dialog
      confirmLabel="Deletar"
      loading={loading}
      open={open}
      subtitle="Atenção, Você está deletando um produto!"
      title="Deletar Produto"
      onCancel={onClose}
      onConfirm={handleDelete}
      onClose={onClose}
      reverseActionsButtons
      maxWidth="small"
      variant="error"
    >
      <Typography variant="body1" color={(theme) => theme.palette.grey[800]}>
        Se você continuar, estará deletando o produto:
        <b> {product?.name || " - "}</b> e não poderá usa-lo novamente. Essa
        ação não poderá ser desfeita!
      </Typography>
      <br />
      <Typography variant="body1" color={(theme) => theme.palette.grey[800]}>
        <b>Realmente deseja deletar?</b>
      </Typography>
    </Dialog>
  );
};
