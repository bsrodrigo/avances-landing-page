import {
  Inventory,
  InventoryHistory,
  InventoryTransactionType,
} from "@/modules/products/domain";
import {
  ActionTypes,
  FIND_INVENTORY,
  FIND_INVENTORY_HISTORY,
  FIND_TRANSACTION_TYPES,
} from "./types";

export function fetchFindInventory(payload: Inventory[]): ActionTypes {
  return { type: FIND_INVENTORY, payload };
}

export function fetchFindInventoryHistory(
  payload: InventoryHistory[]
): ActionTypes {
  return { type: FIND_INVENTORY_HISTORY, payload };
}

export function fetchFindTransactionTypes(
  payload: InventoryTransactionType[]
): ActionTypes {
  return { type: FIND_TRANSACTION_TYPES, payload };
}
