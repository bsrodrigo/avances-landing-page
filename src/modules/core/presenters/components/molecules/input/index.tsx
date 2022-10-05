import { FormHelperText } from "@mui/material";
import {
  FormControl,
  IInputBase,
  InputBase,
  InputLabel,
} from "@/modules/core/presenters/components/atoms";
import { RefCallBack, UseFormRegisterReturn } from "react-hook-form";

interface IInput
  extends Omit<IInputBase, "name" | "ref" | "onBlur" | "onChange">,
    UseFormRegisterReturn {
  error?: boolean;
  label?: string;
  textHelper?: string;
  ref: RefCallBack;
}

export const Input: React.FC<IInput> = ({
  error,
  fullWidth,
  label,
  id,
  textHelper,
  ...props
}) => (
  <FormControl variant="standard" fullWidth={fullWidth}>
    {label && (
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
    )}

    <InputBase id={id} {...props} error={error} fullWidth={fullWidth} />
    {textHelper && <FormHelperText error={error}>{textHelper}</FormHelperText>}
  </FormControl>
);
