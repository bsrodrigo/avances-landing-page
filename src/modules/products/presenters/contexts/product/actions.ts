import { Measurement, Product } from "@/modules/products/domain";
import { ActionTypes, CREATE_PRODUCT, FIND_MEASUREMENTS, FIND_PRODUCTS } from "./types";

export function fetchCreateProduct(payload: Product): ActionTypes {
  return { type: CREATE_PRODUCT, payload };
}

export function fetchFindMeasurements(payload: Measurement[]): ActionTypes {
  return { type: FIND_MEASUREMENTS, payload };
}

export function fetchFindProducts(payload: Product[]): ActionTypes {
  return { type: FIND_PRODUCTS, payload };
}
