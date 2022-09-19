import { Breadcrumbs, BreadcrumbsProps } from "@mui/material";
import React from "react";

interface IBaseBreadcrumbs extends BreadcrumbsProps {}

export const BaseBreadcrumbs: React.FC<IBaseBreadcrumbs> = ({
  children,
  ...props
}) => {
  return <Breadcrumbs {...props}>{children}</Breadcrumbs>;
};
