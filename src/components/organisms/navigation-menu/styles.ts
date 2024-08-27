import { Box, styled } from "@mui/material";

export const Root = styled(Box)(({ theme }) => {
  return {
    "& .MuiChip-colorDefault": {
      background: theme.palette.grey[300],
    },
  };
});
