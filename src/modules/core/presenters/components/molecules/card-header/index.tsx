import { ReactNode } from "react";
import { Typography } from "@/modules/core/presenters/components/atoms";

import { CardActionBox, CardHeaderBox } from "./styled";

interface ICardHeader {
  title: string;
  subtitle?: string;
  actionElement?: ReactNode;
}

export const CardHeader: React.FC<ICardHeader> = ({
  title,
  subtitle,
  actionElement,
}) => {
  return (
    <CardHeaderBox>
      <div>
        <Typography variant="h6" color={(theme) => theme.palette.grey[800]}>
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            color={(theme) => theme.palette.grey[600]}
          >
            Veja os produto disponíveis na gestão de seu negócio
          </Typography>
        )}
      </div>

      <CardActionBox>{actionElement}</CardActionBox>
    </CardHeaderBox>
  );
};
