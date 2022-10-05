import { alpha, styled } from "@mui/material/styles";
import { InputBase as MuiInputBase, InputBaseProps } from "@mui/material";
import { useForm } from "react-hook-form";

export interface IInputBase extends InputBaseProps {}

export const InputBaseStyled = styled(MuiInputBase)<IInputBase>(
  ({ theme, error, fullWidth }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
      border: `1px solid ${error ? theme.palette.error.main : "#ced4da"}`,
      fontSize: 16,
      width: fullWidth ? "100%" : "auto",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),

      "&:focus": {
        boxShadow: `${alpha(
          error ? theme.palette.error.main : theme.palette.primary.main,
          0.25
        )} 0 0 0 0.2rem`,
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.primary.main,
      },
    },
  })
);

export const InputBase: React.FC<IInputBase> = ({ name, ...props }) => {
  const { register } = useForm();
  return <InputBaseStyled {...props} />;
};
