import { MenuOutlined as MenuOutlinedIcon } from "@mui/icons-material";
import { IconButton, Slide } from "@mui/material";
import { HeaderProfile } from "@/modules/core/presenters/components/molecules";
import { IconButtonStyled, NavBarHeaderBoxStyled } from "./styled";

interface INavBarHeader {
  open: boolean;
  onOpen: () => void;
}

export const NavBarHeader: React.FC<INavBarHeader> = ({ open, onOpen }) => {
  return (
    <NavBarHeaderBoxStyled>
      <div>
        <Slide in={!open} direction="right">
          <IconButtonStyled onClick={onOpen}>
            <MenuOutlinedIcon />
          </IconButtonStyled>
        </Slide>
      </div>

      <HeaderProfile />
    </NavBarHeaderBoxStyled>
  );
};
