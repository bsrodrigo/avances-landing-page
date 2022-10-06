import { useState } from "react";

import { useProductContext } from "@/modules/products/presenters/contexts";

import { Button, Card } from "@/modules/core/presenters/components/atoms";
import { CardHeader } from "@/modules/core/presenters/components/molecules";
import { DeleteProduct } from "@/modules/products/presenters/components/molecules";
import {
  ProductForm,
  ProductsTable,
} from "@/modules/products/presenters/components/organisms";

import { Product } from "@/modules/products/domain";

export const ProductContent: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [productSelected, setProductSelected] = useState<Product>(null!);

  const { deleteProduct } = useProductContext();

  // ---------- Open edit & delete
  const handleOpenDelete = (product: Product): void => {
    setProductSelected(product);
    setOpenDelete(true);
  };

  const handleCloseDelete = (): void => {
    setOpenDelete(false);
    setProductSelected(null!);
  };

  const handleOpenForm = (product?: Product): void => {
    if (product?.id) setProductSelected(product);
    setOpenForm(true);
  };

  const handleCloseForm = (): void => {
    setOpenForm(false);
    setProductSelected(null!);
  };

  // ---------- handles edit & delete
  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (product: Product): void => {
    if (!product) return;

    setProductSelected(product);
    handleOpenForm();
  };

  return (
    <>
      <Card elevation={2} style={{ marginTop: 24 }}>
        <CardHeader
          title="Lista de produtos"
          subtitle="Veja os produto disponíveis na gestão de seu negócio"
          actionElement={
            <Button variant="outlined" onClick={() => handleOpenForm()}>
              Adicionar
            </Button>
          }
        />

        <ProductsTable onDelete={handleOpenDelete} onEdit={handleEdit} />
      </Card>

      {openForm && (
        <ProductForm
          open={openForm}
          onClose={handleCloseForm}
          product={productSelected}
        />
      )}

      <DeleteProduct
        product={productSelected}
        onClose={handleCloseDelete}
        onDelete={handleDelete}
        open={openDelete}
      />
    </>
  );
};
