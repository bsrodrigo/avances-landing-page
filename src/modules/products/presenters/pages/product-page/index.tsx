import { useState } from "react";

import { alpha, Card, IconButton, Typography } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { Header } from "@/modules/core/presenters/components/organisms";

import { theme } from "@/modules/core/presenters/components/bosons";
import { ProductsTable } from "@/modules/products/presenters/components/organisms";
import { ProductForm } from "@/modules/products/presenters/components/molecules";

export const ProductPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <div>
      <Header
        breadcrumbs={[{ label: "Home", link: "/home" }, { label: "Produtos" }]}
        title="Produtos"
      />
      <Card elevation={2} style={{ marginTop: 24 }}>
        <div
          style={{
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h6" color={(theme) => theme.palette.grey[800]}>
              Lista de produtos
            </Typography>
            <Typography
              variant="body1"
              color={(theme) => theme.palette.grey[600]}
            >
              Veja os produto disponíveis na gestão de seu negócio
            </Typography>
          </div>

          <div>
            <IconButton
              aria-label="add-product-button"
              color="primary"
              style={{ background: alpha(theme.palette.primary.light, 0.1) }}
              onClick={handleOpen}
            >
              <AddOutlined />
            </IconButton>
          </div>
        </div>

        <ProductsTable />
      </Card>

      <ProductForm open={open} onClose={handleClose} />
    </div>
  );
};
