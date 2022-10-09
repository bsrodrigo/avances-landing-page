import { Link as RouterLink } from "react-router-dom";
import {
  BaseBreadcrumbs,
  Typography,
} from "@/modules/core/presenters/components/atoms";
import { Link } from "@mui/material";

export interface IBreadcrumb {
  label: string;
  link?: string;
}

interface IBreadcrumbs {
  breadcrumbs: IBreadcrumb[];
}

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ breadcrumbs }) => (
  <BaseBreadcrumbs aria-label="breadcrumb">
    {breadcrumbs?.map((breadcrumb, index) =>
      breadcrumb?.link ? (
        <Link
          component={RouterLink}
          key={`breadcrumb-header-item${index}`}
          underline="hover"
          color="inherit"
          to={breadcrumb?.link}
        >
          {breadcrumb?.label}
        </Link>
      ) : (
        <Typography key={`breadcrumb-header-item${index}`} color="primary">
          {breadcrumb?.label}
        </Typography>
      )
    )}
  </BaseBreadcrumbs>
);
