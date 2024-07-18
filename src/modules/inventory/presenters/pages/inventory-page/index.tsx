import {
  Calendar,
  Header,
} from "@/modules/core/presenters/components/organisms";
import { InventoryContent } from "@/modules/inventory/presenters/components/organisms";

import { InventoryProvider } from "@/modules/inventory/presenters/contexts";

const InventoryPage: React.FC = () => (
  <InventoryProvider>
    <Header
      breadcrumbs={[{ label: "Home", link: "/home" }, { label: "Estoque" }]}
      title="Estoque"
    />
    <Calendar />
    <InventoryContent />
  </InventoryProvider>
);

export default InventoryPage;
