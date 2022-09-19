import { Card as MuiCard, CardProps } from "@mui/material";
import React from "react";

interface ICard extends CardProps {}

export const Card: React.FC<ICard> = ({ children, ...props }) => {
  return <MuiCard {...props}>{children}</MuiCard>;
};
