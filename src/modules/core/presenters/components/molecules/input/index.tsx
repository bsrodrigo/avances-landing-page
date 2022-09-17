import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import {
  IInputBase,
  InputBase,
} from "@/modules/core/presenters/components/atoms";

interface IInput extends IInputBase {
  error?: boolean;
  label?: string;
  textHelper?: string;
}

export const Input: React.FC<IInput> = ({
  error,
  fullWidth,
  label,
  id,
  textHelper,
  ...props
}) => {
  return (
    <FormControl variant="standard" fullWidth={fullWidth}>
      {label && (
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
      )}

      <InputBase id={id} {...props} error={error} fullWidth={fullWidth} />
      {textHelper && (
        <FormHelperText error={error}>{textHelper}</FormHelperText>
      )}
    </FormControl>
  );
};
