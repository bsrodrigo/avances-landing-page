import { MenuOutlined } from "@mui/icons-material";
import {
  Avatar,
  Fade,
  IconButton,
  Paper,
  Slide,
  Typography,
} from "@mui/material";

interface INavBarHeader {
  open: boolean;
  onOpen: () => void;
}

export const NavBarHeader: React.FC<INavBarHeader> = ({ open, onOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "16px 48px 0 48px",
      }}
    >
      <div>
        <Slide in={!open} direction="right">
          <IconButton
            style={{
              backgroundColor: "#fff",
              boxShadow:
                "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            }}
            onClick={onOpen}
          >
            <MenuOutlined />
          </IconButton>
        </Slide>
      </div>

      <Paper style={{ padding: "8px 16px", borderRadius: 32 }} elevation={4}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Typography variant="body2">Marco Josy</Typography>
          <Avatar />
        </div>
      </Paper>
    </div>
  );
};
