import { useRef, useState } from "react";

import {
  Button,
  Card,
  Typography,
} from "@/modules/core/presenters/components/atoms";
import { CardHeader } from "@/modules/core/presenters/components/molecules";
import { InventoryTable } from "@/modules/products/presenters/components/organisms";

import { Product } from "@/modules/products/domain";
import {
  Alert,
  AlertTitle,
  Badge,
  Collapse,
  Divider,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

export const InventoryContent: React.FC = () => {
  const TableRef = useRef<HTMLDivElement>(null);

  const [openFilter, setOpenFilter] = useState<boolean>(true);
  const [filterAbaixo, setFilterAbaixo] = useState<string>(null!);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [productSelected, setProductSelected] = useState<Product>(null!);

  // ---------- Open edit & delete
  const handleOpenDelete = (product: Product): void => {
    setProductSelected(product);
    setOpenDelete(true);
  };

  const handleOpenForm = (product?: Product): void => {
    if (product?.id) setProductSelected(product);
    setOpenForm(true);
  };

  // ---------- handles edit & delete

  const handleEdit = (product: Product): void => {
    if (!product) return;

    setProductSelected(product);
    handleOpenForm();
  };

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Alert
          severity="error"
          action={
            <IconButton>
              <CloseOutlined fontSize="small" />
            </IconButton>
          }
          style={{ marginBottom: 16 }}
        >
          <AlertTitle>Estoque Zerado!</AlertTitle>

          <Typography>
            Existem <b>produtos sem estoque</b> - verifique e se necessário
            atualize seu estoque.
          </Typography>
          <Button
            variant="contained"
            color="error"
            style={{ float: "right" }}
            onClick={() => {
              setFilterAbaixo("1");
              TableRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "start",
              });
            }}
          >
            Verificar
          </Button>
        </Alert>
        <Alert
          severity="warning"
          action={
            <IconButton>
              <CloseOutlined fontSize="small" />
            </IconButton>
          }
          style={{ marginBottom: 16 }}
        >
          <AlertTitle>Estoque Baixo!</AlertTitle>

          <Typography>
            Existem produtos com <b>estoque baixo</b> - verifique e se
            necessário atualize seu estoque.
          </Typography>
          <Button
            variant="contained"
            color="warning"
            style={{ float: "right" }}
            onClick={() => {
              setFilterAbaixo("10");
              TableRef?.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "start",
              });
            }}
          >
            Verificar
          </Button>
        </Alert>
      </div>

      <div style={{ marginBottom: 24 }}>
        <Card elevation={2}>
          <CardHeader
            title={
              filterAbaixo ? (
                <Badge badgeContent={1} color="primary">
                  Filtro
                </Badge>
              ) : (
                "Filtro"
              )
            }
            subtitle="Pesquise por produtos específicos utilizando o filtro"
            actionElement={
              <Button
                variant="outlined"
                onClick={() => setOpenFilter((value) => !value)}
              >
                {openFilter ? "Fechar" : "Abrir"}
              </Button>
            }
          />

          <Collapse in={openFilter}>
            <Grid container columnSpacing={2} rowSpacing={3}>
              <Grid item xs={12} md={3}>
                <TextField label="Produto" fullWidth />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Estoque a baixo de" type="number" fullWidth />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  label="Estoque a cima de"
                  InputLabelProps={{ shrink: !!filterAbaixo }}
                  value={filterAbaixo}
                  onChange={(e) => setFilterAbaixo(e.target?.value)}
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField label="Atualizado em" fullWidth />
              </Grid>
              <Grid item xs={12} justifyContent="flex-end" display="flex">
                <Button>Limpar</Button>
                <Button variant="contained">Filtrar</Button>
              </Grid>
            </Grid>
          </Collapse>
        </Card>
      </div>

      <Card elevation={2}>
        <CardHeader
          title="Produtos no estoque"
          subtitle="Veja os produtos e quantidade disponíveis no estoque"
          actionElement={
            <Button variant="outlined" onClick={() => handleOpenForm()}>
              Adicionar
            </Button>
          }
        />

        <div ref={TableRef}>
          <InventoryTable onDelete={handleOpenDelete} onEdit={handleEdit} />
        </div>
      </Card>
    </>
  );
};
