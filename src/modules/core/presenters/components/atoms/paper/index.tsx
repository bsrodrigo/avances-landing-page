import { Paper as MuiPaper, PaperProps } from "@mui/material";
import React from "react";

interface IPaper extends PaperProps {}

export const Paper: React.FC<IPaper> = ({ children, ...props }) => {
  return <MuiPaper {...props}>{children}</MuiPaper>;
};
