import { ThemeProvider } from "@/contexts";
import { Container, CssBaseline, LinearProgress } from "@mui/material";

import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Container maxWidth="xl">
          <Suspense fallback={<LinearProgress />}>
            <RouterProvider router={routes} />
          </Suspense>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
