import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Switch,
} from "@mui/material";
import { Typography } from "@/modules/core/presenters/components/atoms";
import { Input, Select } from "@/modules/core/presenters/components/molecules";

interface IProductForm {
  open: boolean;
  onClose: () => void;
}

export const ProductForm: React.FC<IProductForm> = ({ open, onClose }) => {
  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { width: "80%", maxHeight: "90%", maxWidth: 960 },
      }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle color={(theme) => theme.palette.grey[800]}>
        <Typography variant="h6" color={(theme) => theme.palette.grey[800]}>
          Adicionar Produto
        </Typography>
        <Typography variant="body1" color={(theme) => theme.palette.grey[600]}>
          Adicione um novo produto disponível na gestão de seu negócio
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <form>
          <Grid container columnSpacing={2} rowSpacing={1}>
            <Grid item sm={12} md={6}>
              <Input
                fullWidth
                label="Nome do Produto"
                id="productName"
                placeholder="Informe o produto"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                fullWidth
                label="Descrição"
                id="productName"
                placeholder="Informe a descrição"
                textHelper="Informação opcional"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Input
                fullWidth
                label="Valor sugerido"
                id="productName"
                placeholder="Informe o valor"
                textHelper="Valor sugerido para a venda"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <Select fullWidth label="Unidade de medida" id="productName">
                <MenuItem value="m3">M3 - Metro cúbico</MenuItem>
                <MenuItem value="un">UN - Unidade</MenuItem>
                <MenuItem value="kg">KG - Quilograma</MenuItem>
              </Select>
            </Grid>

            <Grid item sm={12} md={5}>
              <FormLabel component="legend">Configurações do produto</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultValue={1} name="gilad" />}
                  label="Disponível para venda"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={<Switch name="jason" />}
                  label="Disponível para locação"
                  labelPlacement="end"
                />
                <FormControl>
                  <FormControlLabel
                    control={<Switch name="antoine" />}
                    label="Valor fixo"
                    labelPlacement="end"
                  />
                  <FormHelperText>
                    Na venda o valor não será alterado
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormControlLabel
                    control={<Switch name="antoine" />}
                    label="Estoque Disponível"
                    labelPlacement="end"
                  />
                  <FormHelperText>O Produto terá um estoque?</FormHelperText>
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item>
              <FormControl>
                <FormLabel component="legend">Desativar Produto</FormLabel>
                <FormControlLabel
                  control={<Switch />}
                  label="Inativo"
                  labelPlacement="bottom"
                />
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" onClick={() => null}>
          Adicionar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
