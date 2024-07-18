import { Card, Typography } from "@/modules/core/presenters/components/atoms";
import {
  Breadcrumbs,
  IBreadcrumb,
} from "@/modules/core/presenters/components/molecules";

import { CalendarStyled } from "./styled";
import { Box, useTheme } from "@mui/material";

interface ICalendar {}

export const Calendar: React.FC<ICalendar> = ({}) => {
  const theme = useTheme();

  return (
    <CalendarStyled>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingY={3}
        paddingX={3}
      >
        <Box height={16}>Type vision</Box>
        <Box>Selector Month/year</Box>
        <Box>Filters</Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="auto auto auto auto auto auto auto"
        borderTop={1}
        borderColor={theme.palette.grey[200]}
        paddingY={1}
      >
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"].map(
          (item, index) => (
            <Box
              key={`calendar-week-box-${index}`}
              display="flex"
              justifyContent="center"
            >
              {item}
            </Box>
          )
        )}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="auto auto auto auto auto auto auto"
      >
        {[...Array(42)].map((_, index) => {
          const borderRight = (index + 1) % 7 !== 0 ? 1 : 0;

          return (
            <Box
              key={`calendar-day-box-${index}`}
              display="flex"
              borderTop={1}
              borderRight={borderRight}
              borderColor={theme.palette.grey[200]}
              padding={1}
              minHeight={theme.spacing(10)}
            >
              {index + 1}
            </Box>
          );
        })}
      </Box>
      {/* Add your code here */}
    </CalendarStyled>
  );
};
