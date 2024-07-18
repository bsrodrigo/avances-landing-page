import { Header } from "@/modules/core/presenters/components/organisms";
import { InventoryContent } from "@/modules/inventory/presenters/components/organisms";

import { ProductProvider } from "@/modules/inventory/presenters/contexts";

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
