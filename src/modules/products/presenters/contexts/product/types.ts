import { Measurement, Product } from "@/modules/products/domain";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const FIND_MEASUREMENTS = "FIND_MEASUREMENTS";
export const FIND_PRODUCTS = "FIND_PRODUCTS";

export type InitialState = {
  measurements: Measurement[];
  products: Product[];
};

type CreateProductAction = {
  type: typeof CREATE_PRODUCT;
  payload: Product;
};

type FindMeasurementsAction = {
  type: typeof FIND_MEASUREMENTS;
  payload: Measurement[];
};

type FindProductsAction = {
  type: typeof FIND_PRODUCTS;
  payload: Product[];
};

export type ActionTypes =
  | CreateProductAction
  | FindMeasurementsAction
  | FindProductsAction;
