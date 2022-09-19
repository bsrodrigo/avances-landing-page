import { Typography } from "@/modules/core/presenters/components/atoms";
import {
  Breadcrumbs,
  IBreadcrumb,
} from "@/modules/core/presenters/components/molecules";

interface IHeader {
  title: string;
  breadcrumbs: IBreadcrumb[];
}

export const Header: React.FC<IHeader> = ({ breadcrumbs, title }) => {
  return (
    <div>
      <Typography variant="h4" color={(theme) => theme.palette.grey[600]}>
        {title}
      </Typography>

      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
};
