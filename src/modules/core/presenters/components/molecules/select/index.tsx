import {
  FormControl,
  FormHelperText,
  InputBase,
  InputLabel,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";
import { SelectBase } from "@/modules/core/presenters/components/atoms";

interface ISelect extends SelectProps {
  error?: boolean;
  label?: string;
  textHelper?: string;
}

export const Select: React.FC<ISelect> = ({
  children,
  error,
  fullWidth,
  label,
  id,
  textHelper,
  ...props
}) => {
  return (
    <FormControl variant="outlined" fullWidth={fullWidth}>
      {label && (
        <InputLabel shrink htmlFor={id} style={{ margin: "8px 0 0 -16px" }}>
          {label}
        </InputLabel>
      )}

      <MuiSelect
        id={id}
        {...props}
        error={error}
        fullWidth={fullWidth}
        input={<SelectBase />}
      >
        {children}
      </MuiSelect>

      {textHelper && (
        <FormHelperText error={error}>{textHelper}</FormHelperText>
      )}
    </FormControl>
  );
};
