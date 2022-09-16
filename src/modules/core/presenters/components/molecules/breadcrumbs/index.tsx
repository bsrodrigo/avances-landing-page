import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from "@mui/material";

export interface IBreadcrumb {
  label: string;
  link?: string;
}

interface IBreadcrumbs {
  breadcrumbs: IBreadcrumb[];
}

export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ breadcrumbs }) => {
  console.log({ breadcrumbs });
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {breadcrumbs?.map((breadcrumb, index) =>
        breadcrumb?.link ? (
          <Link
            key={`breadcrumb-header-item${index}`}
            underline="hover"
            color="inherit"
            href={breadcrumb?.link}
          >
            {breadcrumb?.label}
          </Link>
        ) : (
          <Typography key={`breadcrumb-header-item${index}`} color="primary">
            {breadcrumb?.label}
          </Typography>
        )
      )}
    </MuiBreadcrumbs>
  );
};
