import { LoadingContent } from "@/modules/core/presenters/components/molecules";
import { Product } from "@/modules/products/domain";
import { IInventoryHistoryRequest } from "@/modules/products/infra/interface";
import {
  RemoteInventoryRepository,
  RemoteProductRepository,
} from "@/modules/products/infra/remote";
import React, { ReactNode, useEffect, useReducer, useState } from "react";

import {
  fetchFindInventory,
  fetchFindInventoryHistory,
  fetchFindTransactionTypes,
} from "./actions";
import { InventoryContext } from "./context";
import { initialState, reducer } from "./reducers";

interface IInventoryProvider {
  children: ReactNode;
}

export const InventoryProvider: React.FC<IInventoryProvider> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const load = async (): Promise<void> => {
    try {
      await findInventory();
      await findInventoryHistory();
      await findTransactionTypes();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createInventoryHistory = async (
    data: IInventoryHistoryRequest
  ): Promise<void> => {
    const remoteInventoryRepository = new RemoteInventoryRepository();
    const responseData = await remoteInventoryRepository.createInventoryHistory(
      data
    );
    findInventory();
  };

  const findInventory = async (): Promise<void> => {
    const remoteInventoryRepository = new RemoteInventoryRepository();
    const responseData = await remoteInventoryRepository.findInventory();
    dispatch(fetchFindInventory(responseData));
  };

  const findInventoryHistory = async (): Promise<void> => {
    const remoteInventoryRepository = new RemoteInventoryRepository();
    const responseData = await remoteInventoryRepository.findInventoryHistory();
    dispatch(fetchFindInventoryHistory(responseData));
  };

  const findProducts = async (): Promise<Product[]> => {
    const remoteProductRepository = new RemoteProductRepository();
    const responseData = await remoteProductRepository.findProducts();
    return responseData;
  };

  const findTransactionTypes = async (): Promise<void> => {
    const remoteInventoryRepository = new RemoteInventoryRepository();
    const responseData = await remoteInventoryRepository.findTransactionTypes();
    console.log({ responseData });
    dispatch(fetchFindTransactionTypes(responseData));
  };

  useEffect(() => {
    if (loading) load();
  }, []);

  return (
    <InventoryContext.Provider
      value={{
        inventory: state.inventory,
        inventoryHistory: state.inventoryHistory,
        transactionTypes: state.transactionTypes,
        createInventoryHistory,
        findProducts,
        findTransactionTypes,
      }}
    >
      <LoadingContent loading={loading}>{error || children}</LoadingContent>
    </InventoryContext.Provider>
  );
};
