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
          borderRadius: 16,
          backgroundColor: "#FFF !important",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: 24,
          backgroundColor: "#FFF !important",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
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
