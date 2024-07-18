import { MenuItem, styled } from "@mui/material";

interface INavBarItemStyled {
  expanded: boolean;
  isActive?: boolean;
}

export const NavBarItemStyled = styled(MenuItem)<INavBarItemStyled>(
  ({ expanded, isActive, theme }) => ({
    margin: expanded ? "unset" : "0 auto",
    width: expanded ? "100%" : "fit-content",
    display: "flex",
    gap: 4,
    padding: 8,
    borderRadius: 16,
    color: isActive ? "#2182CC" : theme.palette.grey[600],
    backgroundColor: isActive ? "#E5F4FF" : "none",
    alignItems: "center",
    whiteSpace: "nowrap",
  })
);
