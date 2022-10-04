import { TextField as MuiTextField, StandardTextFieldProps } from "@mui/material";
import React from "react";

interface ITextField extends StandardTextFieldProps {}

export const TextField: React.FC<ITextField> = ({ children, ...props }) => {
  return <MuiTextField {...props} />;
};
