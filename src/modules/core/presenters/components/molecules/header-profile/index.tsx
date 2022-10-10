import { Avatar, Typography } from "@/modules/core/presenters/components/atoms";
import { HeaderProfileContent, HeaderProfilePaper } from "./styled";

interface IHeaderProfile {}

export const HeaderProfile: React.FC<IHeaderProfile> = ({}) => {
  return (
    <HeaderProfilePaper elevation={4}>
      <HeaderProfileContent>
        <Typography variant="body2">Marcos Josy</Typography>
        <Avatar />
      </HeaderProfileContent>
    </HeaderProfilePaper>
  );
};
