import { styled } from "@mui/material";
import { Paper } from "@/modules/core/presenters/components/atoms";

export const HeaderProfileContent = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
}));

export const HeaderProfilePaper = styled(Paper)(() => ({
  padding: "8px 16px",
  borderRadius: 32,
}));
