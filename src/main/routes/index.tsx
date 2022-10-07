import { lazy } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";

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
            <Link to="/estoque/produtos">Ir para Produtos</Link>
          </div>
        </div>
      }
    />
    <Route path="/estoque">
      <Route
        index
        element={
          <div>
            <h1>Estoque</h1>
            <div>
              <Link to="/estoque/produtos">Ir para Produtos</Link>
            </div>
          </div>
        }
      />
      <Route path="produtos" element={<ProductsPage />} />
    </Route>
    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);
