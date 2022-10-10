import { ReactNode } from "react";

import { Typography } from "@/modules/core/presenters/components/atoms";
import { NavBarItemStyled } from "./styled";

interface INavBarItem {
  disabled?: boolean;
  expanded: boolean;
  icon: ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const NavBarItem: React.FC<INavBarItem> = ({
  disabled,
  expanded,
  icon,
  label,
  isActive,
  onClick,
}) => {
  return (
    <NavBarItemStyled
      expanded={expanded}
      isActive={isActive}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {expanded && <Typography variant="body1">{label}</Typography>}
    </NavBarItemStyled>
  );
};
