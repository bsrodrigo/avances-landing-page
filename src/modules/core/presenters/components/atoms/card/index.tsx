import { CardProps } from "@mui/material";
import { CardStyled } from "./styled";

interface ICard extends CardProps {}

export const Card: React.FC<ICard> = ({ children, ...props }) => {
  return <CardStyled {...props}>{children}</CardStyled>;
};
