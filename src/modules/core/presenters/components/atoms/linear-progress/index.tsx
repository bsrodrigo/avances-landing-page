import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps,
} from "@mui/material";
import React from "react";

interface ILinearProgress extends LinearProgressProps {}

export const LinearProgress: React.FC<ILinearProgress> = ({ ...props }) => {
  return <MuiLinearProgress {...props} />;
};
