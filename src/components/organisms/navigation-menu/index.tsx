import { Box, Chip, useTheme } from "@mui/material";
import { Root } from "./styles";

export const NavigationMenu = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Root
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap={theme.spacing(4)}
      marginBottom={theme.spacing(4)}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={theme.spacing(2)}
      >
        <Box>
          <Box width={40} height={40} bgcolor="black" borderRadius={10} />
        </Box>
        <Box
          display="flex"
          gap={theme.spacing(1)}
          bgcolor={theme.palette.grey[300]}
          borderRadius={theme.spacing(2)}
        >
          <Chip label="Home" onClick={() => alert("home")} color="primary" />
          <Chip label="About" onClick={() => alert("about")} />
          <Chip label="About" onClick={() => alert("about")} />
          <Chip label="About" onClick={() => alert("about")} />
          <Chip label="About" onClick={() => alert("about")} />
        </Box>
      </Box>
      <Box display="flex" gap={theme.spacing(1)}>
        <Chip
          label="Orçamento"
          onClick={() => alert("contact")}
          variant="outlined"
          color="primary"
        />
        <Chip
          label="Contact"
          onClick={() => alert("contact")}
          color="primary"
        />
      </Box>
    </Root>
  );
};
