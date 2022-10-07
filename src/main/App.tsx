import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "@/modules/core/presenters/components/bosons";
import { Sidebar } from "@/modules/core/presenters/components/organisms";
import { AppRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <>
      {/* <ScopedCssBaseline enableColorScheme> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div style={{ display: "flex" }}>
          <Sidebar />

          <Container maxWidth={false} style={{ marginTop: 48 }}>
            <AppRoutes />
          </Container>
        </div>
      </ThemeProvider>
      {/* </ScopedCssBaseline> */}
    </>
  );
};

export default App;
