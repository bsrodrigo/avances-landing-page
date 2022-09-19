import { InputLabel as MuiInputLabel, InputLabelProps } from "@mui/material";
import React from "react";

interface IInputLabel extends InputLabelProps {}

export const InputLabel: React.FC<IInputLabel> = ({ children, ...props }) => {
  return <MuiInputLabel {...props}>{children}</MuiInputLabel>;
};
