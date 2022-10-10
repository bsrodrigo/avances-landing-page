import {
  CategoryOutlined as CategoryOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  InventoryOutlined as InventoryOutlinedIcon,
  ManageSearchOutlined as ManageSearchOutlinedIcon,
} from "@mui/icons-material";
import { lazy, ReactNode } from "react";
import { Link } from "react-router-dom";

const InventoryPage = lazy(
  () => import("@/modules/products/presenters/pages/inventory-page")
);
const InventoryHistoryPage = lazy(
  () => import("@/modules/products/presenters/pages/inventory-history-page")
);
const ProductsPage = lazy(
  () => import("@/modules/products/presenters/pages/product-page")
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
    icon: <HomeOutlinedIcon />,
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
    icon: <InventoryOutlinedIcon />,
    element: <InventoryPage />,
    children: [
      {
        path: "produtos",
        label: "Produtos",
        icon: <CategoryOutlinedIcon />,
        element: <ProductsPage />,
      },
      {
        path: "movimentacoes",
        label: "Movimentações",
        icon: <ManageSearchOutlinedIcon />,
        element: <InventoryHistoryPage />,
      },
    ],
  },
  {
    groupLabel: "Negócio",
    path: "negocio",
    label: "Negócio",
    icon: <HomeOutlinedIcon />,
    disabled: true,
    element: <div />,
    children: [
      {
        path: "compras",
        label: "Compras",
        icon: <HomeOutlinedIcon />,
        disabled: true,
        element: <div />,
      },
    ],
  },
];
