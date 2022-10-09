import {
  Avatar,
  Collapse,
  Divider,
  Fade,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Slide,
  Slider,
  styled,
  Typography,
} from "@mui/material";
import {
  HomeOutlined as HomeOutlinedIcon,
  MenuOpenOutlined,
  MenuOutlined,
  ProductionQuantityLimitsOutlined as ProductionQuantityLimitsOutlinedIcon,
} from "@mui/icons-material";
import { SidebarMenuItem } from "@/modules/core/presenters/components/atoms";
import { theme } from "../../bosons";
import { useState } from "react";
import AvancesLogo from "./avances-logo";

export const Sidebar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean>(true);

  const SidebarPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    height: "100%",
    minHeight: "100vh",
    minWidth: 88,
    padding: 24,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    zIndex: 99,
    position: "relative",
  }));

  const SidebarMenu = styled(MenuList)(({ theme }) => ({
    marginLeft: -24,
    marginTop: 48,
    textAlign: "center",
    width: "calc(100% + 48px)",
  }));

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Slide direction="right" in={open}>
        <div>
          <SidebarPaper elevation={6}>
            <IconButton
              style={{
                backgroundColor: "#fff",
                position: "absolute",
                height: 64,
                borderRadius: 0,
                right: -16,
                top: 0,
              }}
              onClick={() => setExpanded((value) => !value)}
            >
              {expanded ? <MenuOpenOutlined /> : <MenuOutlined />}
            </IconButton>

            <div>
              <AvancesLogo />
              <Divider />

              <SidebarMenu>
                <SidebarMenuItem
                  isActive
                  icon={<HomeOutlinedIcon fontSize="large" />}
                  label="Home"
                />
                <SidebarMenuItem
                  icon={
                    <ProductionQuantityLimitsOutlinedIcon fontSize="large" />
                  }
                  label="Estoque"
                />
              </SidebarMenu>
            </div>
          </SidebarPaper>
        </div>
      </Slide>
      <Paper
        elevation={4}
        style={{
          height: 64,
          width: "100%",
          borderRadius: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
        }}
      >
        <Fade in={!open}>
          <IconButton
            onClick={() => {
              setOpen(true);
              setExpanded(true);
            }}
          >
            <MenuOutlined />
          </IconButton>
        </Fade>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Typography variant="body2">Marco Josy</Typography>
          <Avatar />
        </div>
      </Paper>
    </div>
  );
};
