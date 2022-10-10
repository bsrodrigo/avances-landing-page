import { IconButton, styled } from "@mui/material";

export const NavBarHeaderBoxStyled = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "16px 48px 0 48px",
}));

export const IconButtonStyled = styled(IconButton)(() => ({
  backgroundColor: "#fff",
  boxShadow:
    "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
}));
