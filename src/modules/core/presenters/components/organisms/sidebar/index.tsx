import { MenuItem, MenuList, Paper, styled } from "@mui/material";
import {
  HomeOutlined as HomeOutlinedIcon,
  ProductionQuantityLimitsOutlined as ProductionQuantityLimitsOutlinedIcon,
} from "@mui/icons-material";
import { SidebarMenuItem } from "@/modules/core/presenters/components/atoms";

export const Sidebar: React.FC = () => {
  const SidebarPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.grey[100],
    height: "100vh",
    width: 96,
    padding: 24,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }));

  const SidebarMenu = styled(MenuList)(({ theme }) => ({
    width: 96,
    marginLeft: -24,
    marginTop: 48,
    textAlign: "center",
  }));

  return (
    <SidebarPaper elevation={6}>
      <div>
        <svg
          width="48"
          height="67"
          viewBox="0 0 48 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.1011 61.2001C23.2351 57.1885 23.3828 50.8643 20.642 44.9121C17.9012 38.96 9.04287 36.2556 4.66638 42.7526C0.2899 49.2496 13.6508 51.6962 0.805606 62.4081C-2.25433 67.1303 14.7246 67.6971 19.1011 61.2001Z"
            fill="url(#paint0_linear_119_58)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.16457 39.5773C2.75341 42.4521 0.313017 42.6759 0.0856049 41.2051C-1.99171 27.77 34.3255 -2.34883 45.082 0.793957C54.6334 3.58462 38.6501 44.3565 27.1475 49.577C24.8365 50.6259 24.1344 49.1779 23.0069 46.8528C22.0265 44.8308 20.7243 42.1454 17.7625 39.8618C15.9528 38.4665 9.57573 36.7025 6.16457 39.5773ZM23.4788 31.4848C19.8402 29.2529 18.6315 24.4757 20.779 20.8146C22.9265 17.1535 27.617 15.9948 31.2556 18.2267C34.8942 20.4586 36.1029 25.2358 33.9554 28.8969C31.8079 32.5581 27.1173 33.7167 23.4788 31.4848Z"
            fill="#29A3FF"
          />
          <defs>
            <linearGradient
              id="paint0_linear_119_58"
              x1="1.25416"
              y1="51.1313"
              x2="17.5872"
              y2="27.9448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF7B1B" />
              <stop offset="1" stop-color="#FF7B1B" stop-opacity="0.16" />
            </linearGradient>
          </defs>
        </svg>

        <SidebarMenu>
          <SidebarMenuItem isActive>
            <HomeOutlinedIcon fontSize="large" />
          </SidebarMenuItem>
          <SidebarMenuItem>
            <ProductionQuantityLimitsOutlinedIcon fontSize="large" />
          </SidebarMenuItem>
        </SidebarMenu>
      </div>
    </SidebarPaper>
  );
};
