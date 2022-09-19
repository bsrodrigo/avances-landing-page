import { FormControl as MuiFormControl, FormControlProps } from "@mui/material";
import React from "react";

interface IFormControl extends FormControlProps {}

export const FormControl: React.FC<IFormControl> = ({ children, ...props }) => {
  return <MuiFormControl {...props}>{children}</MuiFormControl>;
};
