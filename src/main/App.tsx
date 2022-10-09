import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "@/modules/core/presenters/components/bosons";
import {
  NavBar,
  Sidebar,
} from "@/modules/core/presenters/components/organisms";
import { AppRoutes } from "./routes";
import { Suspense } from "react";
import { LinearProgress } from "@/modules/core/presenters/components/atoms";

const App: React.FC = () => {
  return (
    <>
      {/* <ScopedCssBaseline enableColorScheme> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Sidebar /> */}
        <NavBar>
          <Container maxWidth="xl">
            <Suspense fallback={<LinearProgress />}>
              <AppRoutes />
            </Suspense>
          </Container>
        </NavBar>
      </ThemeProvider>
      {/* </ScopedCssBaseline> */}
    </>
  );
};

export default App;
