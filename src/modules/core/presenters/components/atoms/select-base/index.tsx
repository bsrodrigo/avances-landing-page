import { styled } from "@mui/material/styles";

import { Select } from "@mui/material";

export interface ISelectBase {}

export const SelectBase = styled(Select)<ISelectBase>(({ theme }) => ({
  borderRadius: 12,
  height: 56,
  "& .MuiInputBase-input": {
    borderRadius: 16,
    height: 48,
  },
}));
