import { createTheme } from "@mui/material";
import darkScrollbar from "@mui/material/darkScrollbar";

export const theme = createTheme({
  palette: {
    background: {
      default: "#F7FBFF",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: 24,
          paddingLeft: "48px !important",
          paddingRight: "48px !important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: "16px 24px",
          backgroundColor: "#FFF !important",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? { ...darkScrollbar } : null,
      }),
    },
  },
});
