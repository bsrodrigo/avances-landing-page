import { styled } from "@mui/material";

export const CardActionBox = styled("div")(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
}));

export const CardHeaderBox = styled("div")(() => ({
  marginBottom: 24,
  gap: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap-reverse",
}));
