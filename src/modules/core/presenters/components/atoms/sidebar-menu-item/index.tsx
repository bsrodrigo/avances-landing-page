import { ReactNode } from "react";

import { MenuItem, MenuItemProps, styled } from "@mui/material";

interface ISidebarMenuItem extends MenuItemProps {
  isActive?: boolean;
}

export const SidebarMenuItem = styled(MenuItem)<ISidebarMenuItem>(
  ({ theme, isActive }) => ({
    backgroundColor: isActive ? "#E5F4FF" : "none",
    color: isActive ? "#29A3FF" : "#7B8B96",
    justifyContent: "center",
    position: "relative",
    marginBottom: 16,
    padding: 4,
    "&:hover": {
      backgroundColor: "#F7FBFF",
      color: "#29A3FF",
      transition: ".8s",
    },
    "&:before": isActive
      ? {
          content: '""',
          position: "absolute",
          backgroundColor: "#29A3FF",
          boxShadow: "0px 0px 4px #29A3FF",
          width: 8,
          borderRadius: "0 4px 4px 0",
          height: "100%",
          bottom: 0,
          left: 0,
        }
      : {},
  })
);
