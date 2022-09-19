import { Link as MuiLink, LinkProps } from "@mui/material";
import React from "react";

interface ILink extends LinkProps {}

export const Link: React.FC<ILink> = ({ children, ...props }) => {
  return <MuiLink {...props}>{children}</MuiLink>;
};
