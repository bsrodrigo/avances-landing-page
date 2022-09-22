import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps,
} from "@mui/material";
import React from "react";

interface IFormHelperText extends FormHelperTextProps {}

export const FormHelperText: React.FC<IFormHelperText> = ({
  children,
  ...props
}) => {
  return <MuiFormHelperText {...props}>{children}</MuiFormHelperText>;
};
