import { Header } from "@/modules/core/presenters/components/organisms";
import { InventoryContent } from "@/modules/products/presenters/components/organisms";

import { ProductProvider } from "@/modules/products/presenters/contexts";

const InventoryPage: React.FC = () => (
  <ProductProvider>
    <Header
      breadcrumbs={[{ label: "Home", link: "/home" }, { label: "Estoque" }]}
      title="Estoque"
    />
    <InventoryContent />
  </ProductProvider>
);

export default InventoryPage;
