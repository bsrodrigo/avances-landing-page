import { Header } from "@/modules/core/presenters/components/organisms";
import { InventoryContent } from "@/modules/products/presenters/components/organisms";

import { InventoryProvider } from "@/modules/products/presenters/contexts";

const InventoryPage: React.FC = () => (
  <InventoryProvider>
    <Header
      breadcrumbs={[{ label: "Home", link: "/home" }, { label: "Estoque" }]}
      title="Estoque"
    />
    <InventoryContent />
  </InventoryProvider>
);

export default InventoryPage;
