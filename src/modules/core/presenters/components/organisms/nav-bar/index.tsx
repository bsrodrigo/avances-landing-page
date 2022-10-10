import { useEffect } from "react";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  HomeOutlined as HomeOutlinedIcon,
  MenuOpenOutlined as MenuOpenOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
} from "@mui/icons-material";
import {
  Divider,
  MenuList,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { NavBarItem } from "@/modules/core/presenters/components/molecules";
import { NavBarHeader } from "@/modules/core/presenters/components/organisms";
import { menuNavigation } from "@/modules/core/utils/menu-navigation";

import AvancesLogo from "./avances-logo";
import {
  ExpandButtonCoverStyled,
  ExpandButtonStyled,
  ItemGroupStyled,
  LogoBoxStyled,
  NavBarBodyStyled,
  NavBarStyled,
  NavBoxStyled,
  TitleGroupStyled,
} from "./styled";

interface INavBar {
  children: ReactNode;
}

export const NavBar: React.FC<INavBar> = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState<boolean>(!isMobile);
  const [expanded, setExpanded] = useState<boolean>(true);

  const handleRedirect = (mainPath: string, path?: string): void => {
    if (!mainPath) return;

    if (isMobile) setOpen(false);

    if (!path) {
      navigate(mainPath);
      return;
    }

    return navigate(`${mainPath}/${path}`);
  };

  const handleIsAtiveItem = (mainPath: string, path?: string): boolean => {
    const urlPath = window.location.pathname;
    if (!mainPath) return false;

    if (!path && urlPath === `/${mainPath}`) return true;

    if (urlPath === `/${mainPath}/${path}`) return true;

    return false;
  };

  const handleIsAtiveGroup = (mainPath: string): boolean => {
    const urlPaths = window.location.pathname?.split("/");
    if (!mainPath) return false;

    if (urlPaths[1] === mainPath) return true;

    return false;
  };

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
      setExpanded(true);
      return;
    }
    setOpen(true);
  }, [isMobile]);

  return (
    <NavBoxStyled>
      <Slide in={open} direction="right" style={{ zIndex: 999 }}>
        <div>
          <NavBarStyled isMobile={isMobile} open={open} elevation={4}>
            <LogoBoxStyled>
              <AvancesLogo />
              <Divider />
            </LogoBoxStyled>

            {menuNavigation?.map(
              (
                { disabled, icon, label, path, children, groupLabel },
                index
              ) => (
                <ItemGroupStyled
                  expanded={expanded}
                  key={`menu-group-${index}`}
                >
                  {groupLabel && (
                    <TitleGroupStyled
                      expanded={expanded}
                      key={`menu-group-${index}`}
                    >
                      <Typography
                        variant="overline"
                        color={(theme) =>
                          handleIsAtiveGroup(path)
                            ? theme.palette.primary.main
                            : theme.palette.grey[500]
                        }
                      >
                        {groupLabel}
                      </Typography>
                    </TitleGroupStyled>
                  )}
                  <MenuList style={{ padding: 0 }}>
                    <NavBarItem
                      key={`menu-item-${index}`}
                      expanded={expanded}
                      icon={icon}
                      label={label}
                      isActive={handleIsAtiveItem(path)}
                      onClick={() => (!disabled ? handleRedirect(path) : null)}
                      disabled={disabled}
                    />
                    {children?.length! > 0 &&
                      children?.map((child) => (
                        <NavBarItem
                          key={`menu-item-${index}`}
                          expanded={expanded}
                          icon={child.icon}
                          label={child.label}
                          isActive={handleIsAtiveItem(path, child?.path)}
                          onClick={() =>
                            !child?.disabled
                              ? handleRedirect(path, child?.path)
                              : null
                          }
                          disabled={child?.disabled}
                        />
                      ))}
                  </MenuList>
                </ItemGroupStyled>
              )
            )}

            <ExpandButtonCoverStyled />
            <ExpandButtonStyled
              onClick={() =>
                isMobile ? setOpen(false) : setExpanded((value) => !value)
              }
            >
              {expanded ? <MenuOpenOutlinedIcon /> : <MenuOutlinedIcon />}
            </ExpandButtonStyled>
          </NavBarStyled>
        </div>
      </Slide>

      <NavBarBodyStyled>
        <NavBarHeader open={open} onOpen={() => setOpen(true)} />
        {children}
      </NavBarBodyStyled>
    </NavBoxStyled>
  );
};
