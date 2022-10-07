import { Typography } from "@/modules/core/presenters/components/atoms";
import {
  Breadcrumbs,
  IBreadcrumb,
} from "@/modules/core/presenters/components/molecules";

import { HeaderStyled } from "./styled";
interface IHeader {
  title: string;
  breadcrumbs: IBreadcrumb[];
}

export const Header: React.FC<IHeader> = ({ breadcrumbs, title }) => {
  return (
    <HeaderStyled>
      <Typography variant="h4" color={(theme) => theme.palette.grey[600]}>
        {title}
      </Typography>

      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </HeaderStyled>
  );
};
