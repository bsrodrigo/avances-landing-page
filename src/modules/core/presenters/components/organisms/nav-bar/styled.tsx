import { IconButton, styled } from "@mui/material";
import { Paper } from "@/modules/core/presenters/components/atoms";
import { theme } from "@/modules/core/presenters/components/bosons";

interface INavBarStyled {
  isMobile: boolean;
  open: boolean;
}

interface IItemGroupStyled {
  expanded: boolean;
}

export const ItemGroupStyled = styled("div")<IItemGroupStyled>(
  ({ expanded }) => ({
    marginTop: 8,
    padding: expanded ? "0 16px" : 0,
  })
);

export const TitleGroupStyled = styled("div")<IItemGroupStyled>(
  ({ expanded }) => ({
    padding: "0 8px",
    textAlign: expanded ? "start" : "center",
  })
);

export const NavBoxStyled = styled("div")(() => ({
  display: "flex",
  zIndex: 999
}));

export const NavBarBodyStyled = styled("div")(() => ({
  width: "100%",
}));

export const NavBarStyled = styled(Paper)<INavBarStyled>(
  ({ isMobile, open }) => ({
    borderRadius: "0 16px 16px 0",
    height: "100%",
    minHeight: "100vh",
    display: open ? "block" : "none",
    position: isMobile ? "fixed" : "relative",
    zIndex: 99,
  })
);

export const LogoBoxStyled = styled("div")(() => ({
  padding: "8px 16px",
}));

export const ExpandButtonStyled = styled(IconButton)(() => ({
  position: "absolute",
  right: -20,
  top: 24,
  backgroundColor: "#fff",

  "&:hover": {
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
  },
}));

export const ExpandButtonCoverStyled = styled(IconButton)(() => ({
  width: 20,
  height: 40,
  boxShadow:
    "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
  position: "absolute",
  right: -20,
  top: 24,
  borderRadius: "0 20px 20px 0",
}));
