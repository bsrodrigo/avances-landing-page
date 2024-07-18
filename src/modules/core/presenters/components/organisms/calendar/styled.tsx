import { styled } from "@mui/material";

export const CalendarStyled = styled("div")(({ theme }) => ({
  marginBottom: 32,
  boxShadow: theme.shadows[6],
  borderRadius: theme.spacing(2),
}));
