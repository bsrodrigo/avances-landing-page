import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Switch,
} from "@mui/material";

import {
  FormControl,
  Typography,
} from "@/modules/core/presenters/components/atoms";
import { Input, Select } from "@/modules/core/presenters/components/molecules";
import { useProductContext } from "@/modules/products/presenters/contexts";

interface IProductForm {
  open: boolean;
  onClose: () => void;
}

export const ProductForm: React.FC<IProductForm> = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { findProducts } = useProductContext();

  const handleSubmitForm = (data: any) => {
    console.log({ data });
  };

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { width: "80%", maxHeight: "90%", maxWidth: 960 },
      }}
      maxWidth="xs"
      open={open}
    >
      <form>
        <DialogTitle color={(theme) => theme.palette.grey[800]}>
          <Typography variant="h6" color={(theme) => theme.palette.grey[800]}>
            Adicionar Produto
          </Typography>
          <Typography
            variant="body1"
            color={(theme) => theme.palette.grey[600]}
          >
            Adicione um novo produto disponível na gestão de seu negócio
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container columnSpacing={2} rowSpacing={1}>
            <Grid item sm={12} md={6}>
              <Input
                label="Nome do Produto"
                {...register("name")}
                placeholder="Informe o produto"
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                label="Descrição"
                id="description"
                {...register("description")}
                placeholder="Adicione uma descrição"
                textHelper="Informação opcional"
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                label="Valor do Produto"
                id="price"
                {...register("price")}
                placeholder="Informe o valor"
                fullWidth
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Select
                label="Unidade de medida"
                id="measurement"
                {...register("measurement")}
                defaultValue=""
                fullWidth
              >
                <MenuItem value="">Selecione uma opção</MenuItem>
                <MenuItem value="m3">M3 - Metro cúbico</MenuItem>
                <MenuItem value="un">UN - Unidade</MenuItem>
                <MenuItem value="kg">KG - Quilograma</MenuItem>
              </Select>
            </Grid>

            <Grid item sm={12} md={5}>
              <FormLabel component="legend">Configurações do produto</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch id="activeSale" {...register("activeSale")} />
                  }
                  label="Disponível para venda"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={
                    <Switch id="activeRental" {...register("activeRental")} />
                  }
                  label="Disponível para locação"
                  labelPlacement="end"
                />
                <FormControl>
                  <FormControlLabel
                    control={
                      <Switch id="fixedPrice" {...register("fixedPrice")} />
                    }
                    label="Valor fixo"
                    labelPlacement="end"
                  />
                  <FormHelperText>
                    Na venda o valor não será alterado
                  </FormHelperText>
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item>
              <FormControl>
                <FormLabel component="legend">Produto Ativo</FormLabel>
                <FormControlLabel
                  control={<Switch id="isActive" {...register("isActive")} />}
                  label="Ativo"
                  labelPlacement="bottom"
                />
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleSubmit(handleSubmitForm)}>
            Adicionar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
