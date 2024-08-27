import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { NavigationMenu } from "./components/organisms";

const HomePage = lazy(() => import("@/pages/home-page"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavigationMenu />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
    errorElement: "Error",
  },
]);
