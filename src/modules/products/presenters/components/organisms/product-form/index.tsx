import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import {
  Button,
  CircularProgress,
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
  TextField,
} from "@mui/material";

import {
  FormControl,
  Typography,
} from "@/modules/core/presenters/components/atoms";
import {
  CurrencyTextField,
  Select,
} from "@/modules/core/presenters/components/molecules";
import { useProductContext } from "@/modules/products/presenters/contexts";
import { Product } from "@/modules/products/domain";

interface IProductForm {
  editId?: string;
  open: boolean;
  onClose: () => void;
}

export const ProductForm: React.FC<IProductForm> = ({
  editId,
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>(null!);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const { products, createProduct } = useProductContext();

  const handleSubmitForm = async (data: any) => {
    try {
      setLoadingSubmit(true);

      const dataFormatted: Product = {
        ...data,
        id: editId,
        measurement: { id: "632a02ee1850eacb52d2536b" },
      };

      console.log({ dataFormatted });

      if (editId) {
        console.log("edit");

        // await createProduct(dataFormatted);
      } else {
        await createProduct(dataFormatted);
      }

      onClose();
    } catch (error: any) {
      console.error(error?.message);
    } finally {
      setLoadingSubmit(false);
    }
  };

  useEffect(() => {
    const productSelected = products?.find((item) => item.id === editId);
    setProduct(productSelected!);
    setLoading(false);
  }, []);

  return (
    <Dialog
      sx={{
        "& .MuiDialog-paper": { width: "80%", maxHeight: "90%", maxWidth: 960 },
      }}
      maxWidth="xs"
      open={open}
    >
      {!loading ? (
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
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nome do Produto"
                  defaultValue={product?.name}
                  {...register("name")}
                  placeholder="Informe o produto"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Descrição"
                  defaultValue={product?.description}
                  id="description"
                  {...register("description")}
                  placeholder="Adicione uma descrição"
                  helperText="Informação opcional"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Select
                  label="Unidade de medida"
                  defaultValue={product?.measurement?.id}
                  id="measurement"
                  inputProps={register("measurement")}
                  fullWidth
                >
                  <MenuItem value="">Selecione uma opção</MenuItem>
                  <MenuItem value="m3">M3 - Metro cúbico</MenuItem>
                  <MenuItem value="un">UN - Unidade</MenuItem>
                  <MenuItem value="kg">KG - Quilograma</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6}>
                <CurrencyTextField
                  control={control}
                  defaultValue={product?.price}
                  label="Valor do Produto"
                  id="price"
                  name="price"
                  placeholder="Informe o valor"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormLabel component="legend">
                  Configurações do produto
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        id="activeSale"
                        defaultChecked={product?.activeSale}
                        {...register("activeSale")}
                      />
                    }
                    label="Disponível para venda"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        id="activeRental"
                        defaultChecked={product?.activeSale}
                        {...register("activeRental")}
                      />
                    }
                    label="Disponível para locação"
                    labelPlacement="end"
                  />
                  <FormControl>
                    <FormControlLabel
                      control={
                        <Switch
                          id="fixedPrice"
                          defaultChecked={product?.activeSale}
                          {...register("fixedPrice")}
                        />
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
              <Grid item visibility={product?.id ? "visible" : "hidden"}>
                <FormControl>
                  <FormLabel component="legend">Produto Ativo</FormLabel>
                  <FormControlLabel
                    control={
                      <Switch
                        id="isActive"
                        {...register("isActive")}
                        defaultChecked={product?.activeSale ?? true}
                      />
                    }
                    label="Ativo"
                    labelPlacement="bottom"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button onClick={onClose} disabled={loading}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              // type="submit"
              onClick={handleSubmit(handleSubmitForm)}
              disabled={loadingSubmit}
              endIcon={loadingSubmit && <CircularProgress size={16} />}
            >
              {product?.id ? "Alterar" : "Adicionar"}
            </Button>
          </DialogActions>
        </form>
      ) : (
        "loading..."
      )}
    </Dialog>
  );
};
