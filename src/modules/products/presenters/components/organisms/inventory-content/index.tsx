import { useRef, useState } from "react";

import { Button, Card } from "@/modules/core/presenters/components/atoms";
import { CardHeader } from "@/modules/core/presenters/components/molecules";

import { InventoryFilter } from "@/modules/products/presenters/components/molecules";
import {
  InventoryTable,
  InventoryForm,
} from "@/modules/products/presenters/components/organisms";

import { Product } from "@/modules/products/domain";

export const InventoryContent: React.FC = () => {
  const TableRef = useRef<HTMLDivElement>(null);

  const [openForm, setOpenForm] = useState<boolean>(false);
  const [productSelected, setProductSelected] = useState<Product>(null!);

  const handleOpenForm = (product?: Product): void => {
    if (product?.id) setProductSelected(product);
    setOpenForm(true);
  };

  const handleCloseForm = (): void => {
    setProductSelected(null!);
    setOpenForm(false);
  };

  // Fazer filtragem dos alerts de baixo estoque componente: InventoryAlerts
  // const handleFilterAlert = () => {
  //   setFilterAbaixo("1");
  //   TableRef?.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "center",
  //     inline: "start",
  //   });
  // };

  return (
    <>
      <InventoryFilter />

      <Card elevation={2}>
        <CardHeader
          title="Estoque de produtos"
          subtitle="Veja como anda o estoque dos seu produtos"
          actionElement={
            <Button variant="outlined" onClick={() => handleOpenForm()}>
              Atualizar
            </Button>
          }
        />

        <div ref={TableRef}>
          <InventoryTable onEdit={handleOpenForm} />
        </div>
      </Card>

      <InventoryForm onClose={handleCloseForm} open={openForm} product={productSelected} />
    </>
  );
};
