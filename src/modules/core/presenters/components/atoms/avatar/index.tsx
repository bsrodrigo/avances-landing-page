import { Avatar as MuiAvatar, AvatarProps } from "@mui/material";
import React from "react";

interface IAvatar extends AvatarProps {}

export const Avatar: React.FC<IAvatar> = ({ children, ...props }) => {
  return <MuiAvatar {...props}>{children}</MuiAvatar>;
};
