import { Header } from "@/modules/core/presenters/components/organisms";
import { InventoryContent } from "@/modules/products/presenters/components/organisms";

import { ProductProvider } from "@/modules/products/presenters/contexts";

const InventoryHistoryPage: React.FC = () => (
  <ProductProvider>
    <Header
      breadcrumbs={[
        { label: "Home", link: "/home" },
        { label: "Estoque", link: "/estoque" },
        { label: "Movimentações" },
      ]}
      title="Movimentações de estoque"
    />
    <InventoryContent />
  </ProductProvider>
);

export default InventoryHistoryPage;
