import {
  Inventory,
  InventoryHistory,
  InventoryTransactionType,
  Product,
} from "@/modules/inventory/domain";
import { IInventoryHistoryRequest } from "@/modules/inventory/infra/interface";
import { createContext, useContext } from "react";

type PropsInventoryContext = {
  inventory: Inventory[];
  inventoryHistory: InventoryHistory[];
  transactionTypes: InventoryTransactionType[];
  createInventoryHistory: (data: IInventoryHistoryRequest) => Promise<void>;
  findProducts: () => Promise<Product[]>;
  findTransactionTypes: () => void;
};

export const InventoryContext = createContext<PropsInventoryContext>(
  {} as PropsInventoryContext
);

export const useInventoryContext = (): PropsInventoryContext =>
  useContext(InventoryContext);
