import { lazy } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

const InventoryPage = lazy(
  () => import("@/modules/products/presenters/pages/inventory-page")
);
const InventoryHistoryPage = lazy(
  () => import("@/modules/products/presenters/pages/inventory-history-page")
);
const ProductsPage = lazy(
  () => import("@/modules/products/presenters/pages/product-page")
);

export const AppRoutes = () => (
  <Routes>
    <Route
      path="/home"
      element={
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
      }
    />
    <Route path="/estoque">
      <Route index element={<InventoryPage />} />
      <Route path="movimentacoes" element={<InventoryHistoryPage />} />
      <Route path="produtos" element={<ProductsPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);
