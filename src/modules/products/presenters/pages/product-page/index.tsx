import { Paper } from "@/modules/core/presenters/components/atoms";
import { Header } from "@/modules/core/presenters/components/organisms";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { ProductsTable } from "@/modules/products/presenters/components/organisms";

export const ProductPage: React.FC = () => {
  return (
    <div>
      <Header
        breadcrumbs={[{ label: "Home", link: "/home" }, { label: "Produtos" }]}
        title="Produtos"
      />
      <Paper elevation={2} style={{ marginTop: 24 }}>
        <Typography variant="h6" color={(theme) => theme.palette.grey[800]}>
          Lista de produtos
        </Typography>
        <Typography
          variant="body1"
          color={(theme) => theme.palette.grey[600]}
          style={{ marginBottom: 16 }}
        >
          Adicione os produtos oferecidos pelo seu negócio
        </Typography>
        <ProductsTable />
      </Paper>
    </div>
  );
};
