import { Container, CssBaseline } from "@mui/material";

import { NavBar } from "@/modules/core/presenters/components/organisms";
import { AppRoutes } from "./routes";
import { Suspense } from "react";
import { LinearProgress } from "@/modules/core/presenters/components/atoms";
import { ThemeProvider } from "@/modules/core/presenters/contexts";

const App: React.FC = () => {
  return (
    <>
      {/* <ScopedCssBaseline enableColorScheme> */}
      <ThemeProvider>
        <CssBaseline />
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
