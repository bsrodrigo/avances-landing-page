import {
  AddShoppingCartRounded as AddShoppingCartRoundedIcon,
  ConstructionRounded as ConstructionRoundedIcon,
  HomeRounded as HomeRoundedIcon,
  Inventory2Rounded as Inventory2RoundedIcon,
  ManageSearchRounded as ManageSearchRoundedIcon,
} from "@mui/icons-material";
import { lazy, ReactNode } from "react";
import { Link } from "react-router-dom";

const InventoryPage = lazy(
  () => import("@/modules/inventory/presenters/pages/inventory-page")
);
const InventoryHistoryPage = lazy(
  () => import("@/modules/inventory/presenters/pages/inventory-history-page")
);
const ProductsPage = lazy(
  () => import("@/modules/inventory/presenters/pages/product-page")
);

interface IMenuNavigation {
  disabled?: boolean;
  groupLabel?: string;
  path: string;
  label: string;
  icon: ReactNode;
  children?: IMenuNavigation[];
  element: ReactNode;
}

export const menuNavigation: IMenuNavigation[] = [
  {
    path: "home",
    label: "Home",
    icon: <HomeRoundedIcon />,
    element: (
      <div>
        <h1>Home</h1>
        <div>
          <Link to="/estoque">Ir para Estoque</Link>
        </div>
        <div>
          <Link to="/estoque/produtos">Ir para Produtos</Link>
        </div>
        <div>
          <Link to="/estoque/movimentacoes">
            Ir para Movimentações do estoque
          </Link>
        </div>
      </div>
    ),
  },
  {
    groupLabel: "Estoque",
    path: "estoque",
    label: "Estoque",
    icon: <Inventory2RoundedIcon />,
    element: <InventoryPage />,
    children: [
      {
        path: "produtos",
        label: "Produtos",
        icon: <AddShoppingCartRoundedIcon />,
        element: <ProductsPage />,
      },
      {
        path: "movimentacoes",
        label: "Movimentações",
        icon: <ManageSearchRoundedIcon />,
        element: <InventoryHistoryPage />,
      },
    ],
  },
  {
    groupLabel: "Negócio",
    path: "negocio",
    label: "Negócio",
    icon: <ConstructionRoundedIcon />,
    disabled: true,
    element: <div />,
    children: [
      {
        path: "compras",
        label: "Compras",
        icon: <ConstructionRoundedIcon />,
        disabled: true,
        element: <div />,
      },
    ],
  },
];
