import {
  FormHelperText,
  Select as MuiSelect,
  SelectProps,
} from "@mui/material";

import {
  FormControl,
  InputLabel,
} from "@/modules/core/presenters/components/atoms";

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
    <FormControl fullWidth={fullWidth}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

      <MuiSelect
        id={id}
        label={label}
        error={error}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </MuiSelect>

      {textHelper && (
        <FormHelperText error={error}>{textHelper}</FormHelperText>
      )}
    </FormControl>
  );
};
