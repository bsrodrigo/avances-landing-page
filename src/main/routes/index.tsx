import { Routes, Route, Navigate } from "react-router-dom";

import { menuNavigation } from "@/modules/core/utils/menu-navigation";

export const AppRoutes = () => (
  <Routes>
    {menuNavigation?.map(({ element, path, children }, index) => (
      <Route path={path} key={`route-${path}-${index}`}>
        <Route index element={element} key={`route-${path}-index-${index}`} />

        {children &&
          children?.length > 0 &&
          children?.map((child) => (
            <Route
              path={child.path}
              element={child.element}
              key={`route-${child.path}-${index}`}
            />
          ))}
      </Route>
    ))}

    <Route path="*" element={<Navigate to="/home" />} />
  </Routes>
);
