import { api } from "@/modules/core/utils";
import {
  Inventory,
  InventoryHistory,
  InventoryTransactionType,
} from "@/modules/inventory/domain";
import {
  inventoryHistoryResponseAdapter,
  inventoryResponseAdapter,
  transactionTypesResponseAdapter,
} from "../adapters";
import { IInventoryHistoryRequest } from "../interface";

export class RemoteInventoryRepository {
  async createInventoryHistory(
    data: IInventoryHistoryRequest
  ): Promise<InventoryHistory> {
    const response = await api.post(`inventory`, data);

    return inventoryHistoryResponseAdapter(response?.data);
  }

  async findInventory(): Promise<Inventory[]> {
    const response = await api.get(`inventory`);
    const responseData = response.data?.map((item: any) =>
      inventoryResponseAdapter(item)
    );

    return responseData;
  }

  async findInventoryHistory(): Promise<InventoryHistory[]> {
    const response = await api.get(`inventory/history`);
    const responseData = response.data?.map((item: any) =>
      inventoryHistoryResponseAdapter(item)
    );

    return responseData;
  }

  async findTransactionTypes(): Promise<InventoryTransactionType[]> {
    const response = await api.get(`Inventory/transaction-types`);
    const responseData = response.data?.map((item: any) =>
      transactionTypesResponseAdapter(item)
    );

    return responseData;
  }
}
