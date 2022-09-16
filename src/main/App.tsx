import {
  CssBaseline,
  GlobalStyles,
  ScopedCssBaseline,
  ThemeProvider,
} from "@mui/material";

import { theme } from "@/modules/core/presenters/components/bosons";
import { ProductPage } from "@/modules/products/presenters/pages";
import { Sidebar } from "@/modules/core/presenters/components/organisms";

const App: React.FC = () => {
  return (
    <>
      {/* <ScopedCssBaseline enableColorScheme> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div style={{ display: "flex", gap: 48 }}>
          <div style={{ width: 96 }}>
            <Sidebar />
          </div>

          <div style={{ width: "calc(100% - 96px)", padding: "24px 0" }}>
            <ProductPage />
          </div>
        </div>
      </ThemeProvider>
      {/* </ScopedCssBaseline> */}
    </>
  );
};

export default App;
