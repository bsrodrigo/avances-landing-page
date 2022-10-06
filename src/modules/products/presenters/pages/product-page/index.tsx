import { Header } from "@/modules/core/presenters/components/organisms";
import { ProductContent } from "@/modules/products/presenters/components/organisms";

import { ProductProvider } from "@/modules/products/presenters/contexts";

export const ProductPage: React.FC = () => (
  <ProductProvider>
    <Header
      breadcrumbs={[{ label: "Home", link: "/home" }, { label: "Estoque", link: "/estoque" }, { label: "Produtos" }]}
      title="Produtos"
    />
    <ProductContent />
  </ProductProvider>
);
