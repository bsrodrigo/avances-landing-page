import {
  Container,
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

        <div style={{ display: "flex" }}>
          <div style={{ width: 96 }}>
            <Sidebar />
          </div>

          <Container maxWidth={false}>
            <ProductPage />
          </Container>
        </div>
      </ThemeProvider>
      {/* </ScopedCssBaseline> */}
    </>
  );
};

export default App;
