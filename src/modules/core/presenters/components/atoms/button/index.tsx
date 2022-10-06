import { Button as MuiButton, ButtonProps } from "@mui/material";
import React from "react";

interface IButton extends ButtonProps {}

export const Button: React.FC<IButton> = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};
