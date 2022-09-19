import { Typography as MuiTypography, TypographyProps } from "@mui/material";
import React from "react";

interface ITypography extends TypographyProps {}

export const Typography: React.FC<ITypography> = ({ children, ...props }) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};
