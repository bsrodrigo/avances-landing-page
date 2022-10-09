import {
  GifBoxOutlined,
  HomeOutlined,
  InventoryOutlined,
  MenuOpenOutlined,
  MenuOutlined,
  ProductionQuantityLimitsOutlined,
} from "@mui/icons-material";
import {
  Collapse,
  Divider,
  IconButton,
  MenuList,
  Paper,
  Slide,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { ReactNode, useState } from "react";
import { SidebarMenuItem } from "../../atoms";
import AvancesLogo from "./avances-logo";
import { NavBarHeader } from "./nav-bar-header";

interface INavBar {
  children: ReactNode;
}

interface IItem {
  key: string;
  icon: ReactNode;
  label: string;
}

interface IItemGroup {
  key: string;
  groupTitle?: string;
  items: IItem[];
}

interface IItemActive {
  groupKey: string;
  itemKey: string;
}

const itemActive: IItemActive = {
  groupKey: "estoque",
  itemKey: "estoque",
};

const menu: IItemGroup[] = [
  {
    key: "home",
    items: [{ key: "home", icon: <HomeOutlined />, label: "Home" }],
  },
  {
    key: "estoque",
    groupTitle: "Estoque",
    items: [
      {
        key: "estoque",
        icon: <HomeOutlined />,
        label: "Estoque",
      },
      { key: "produto", icon: <HomeOutlined />, label: "Produtos" },
      {
        key: "estoque-hitorico",
        icon: <HomeOutlined />,
        label: "Histórico do estoque",
      },
    ],
  },
  {
    key: "negocio",
    groupTitle: "Negócio",
    items: [
      { key: "vendas", icon: <HomeOutlined />, label: "Vendas" },
      { key: "compras", icon: <HomeOutlined />, label: "Compras" },
      { key: "contatos", icon: <HomeOutlined />, label: "Contatos" },
    ],
  },
];

export const NavBar: React.FC<INavBar> = ({ children }) => {
  const theme = useTheme();
  const SidebarMenu = styled(MenuList)(({ theme }) => ({
    marginTop: 48,
    textAlign: "center",
  }));

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState<boolean>(!isMobile);
  const [expanded, setExpanded] = useState<boolean>(true);

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
      setExpanded(true);
      return;
    }
    setOpen(true);
  }, [isMobile]);

  return (
    <div style={{ display: "flex" }}>
      <Slide in={open} direction="right" style={{}}>
        <Paper
          elevation={4}
          style={{
            minHeight: "100vh",
            display: open ? "block" : "none",
            position: isMobile ? "fixed" : "relative",
            zIndex: 99,
          }}
        >
          <div style={{ padding: "8px 16px" }}>
            <AvancesLogo />
            <Divider />
          </div>

          <div style={{ padding: expanded ? "0 16px" : 0 }}>
            {menu?.map(({ key, groupTitle, items }, index) => (
              <div key={`menu-box-${index}`} style={{ marginBottom: 16 }}>
                {groupTitle && (
                  <div
                    style={{ padding: "0 16px" }}
                    key={`menu-group-${index}`}
                  >
                    <Typography
                      variant="overline"
                      color={(theme) =>
                        key === itemActive?.groupKey
                          ? theme.palette.primary.main
                          : theme.palette.grey[600]
                      }
                    >
                      {groupTitle}
                    </Typography>
                  </div>
                )}
                {items?.map((item) =>
                  item?.key === itemActive?.itemKey ? (
                    <div
                      key={`menu-item-active${index}`}
                      style={{
                        margin: expanded ? "unset" : "0 auto",
                        width: expanded ? "100%" : "fit-content",
                        display: "flex",
                        gap: 4,
                        padding: "8px 8px",
                        color: "#2182CC",
                        borderRadius: 16,
                        backgroundColor: "#E5F4FF",
                        alignItems: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.icon}
                      {expanded && (
                        <Typography variant="body1">{item?.label}</Typography>
                      )}
                    </div>
                  ) : (
                    <div
                      key={`menu-item-${index}`}
                      style={{
                        margin: expanded ? "unset" : "0 auto",
                        width: expanded ? "100%" : "fit-content",
                        display: "flex",
                        gap: 4,
                        padding: "8px 8px",
                        borderRadius: 16,
                        color: theme.palette.grey[600],
                        alignItems: "center",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.icon}
                      {expanded && <Typography>{item?.label}</Typography>}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
          <div
            style={{
              width: 20,
              height: 40,
              boxShadow:
                "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
              position: "absolute",
              right: -20,
              top: 24,
              borderRadius: "0 20px 20px 0",
            }}
          />
          <IconButton
            onClick={() =>
              isMobile ? setOpen(false) : setExpanded((value) => !value)
            }
            style={{
              position: "absolute",
              right: -20,
              top: 24,
              backgroundColor: "#fff",
            }}
          >
            {expanded ? <MenuOpenOutlined /> : <MenuOutlined />}
          </IconButton>
        </Paper>
      </Slide>
      <div style={{ width: "100%" }}>
        <NavBarHeader open={open} onOpen={() => setOpen(true)} />
        {children}
      </div>
    </div>
  );
};
