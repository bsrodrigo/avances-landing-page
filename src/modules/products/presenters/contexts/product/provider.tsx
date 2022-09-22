import { RemoteProductRepository } from "@/modules/products/infra/remote";
import React, { ReactNode, useEffect, useReducer, useState } from "react";

import { fetchFindMeasurements, fetchFindProducts } from "./actions";
import { ProductContext } from "./context";
import { initialState, reducer } from "./reducers";

interface IProductProvider {
  children: ReactNode;
}

export const ProductProvider: React.FC<IProductProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const load = async (): Promise<void> => {
    try {
      // await FindMeasurements();
      await findProducts();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const FindMeasurements = async (): Promise<void> => {
    const remoteProductRepository = new RemoteProductRepository();
    const responseData = await remoteProductRepository.findMeasurements();
    dispatch(fetchFindMeasurements(responseData));
  };

  const findProducts = async (): Promise<void> => {
    const remoteProductRepository = new RemoteProductRepository();
    const responseData = await remoteProductRepository.findProducts();
    dispatch(fetchFindProducts(responseData));
  };

  useEffect(() => {
    if (loading) load();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        measurements: state.measurements,
        products: state.products,
        findProducts,
      }}
    >
      {loading ? "loading..." : error || children}
    </ProductContext.Provider>
  );
};
