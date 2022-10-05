import {
  BaseBreadcrumbs,
  Link,
  Typography,
} from "@/modules/core/presenters/components/atoms";

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
  </BaseBreadcrumbs>
);
