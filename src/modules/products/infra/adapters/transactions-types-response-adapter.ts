import { InventoryTransactionType } from "@/modules/products/domain";

export const transactionTypesResponseAdapter = (
  item: any
): InventoryTransactionType =>
  new InventoryTransactionType({
    actionType: item?.actionType,
    description: item?.description,
    type: item?.type,
    id: item?._id,
  });
