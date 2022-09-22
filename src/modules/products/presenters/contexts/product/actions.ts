import { Measurement, Product } from "@/modules/products/domain";
import { ActionTypes, FIND_MEASUREMENTS, FIND_PRODUCTS } from "./types";

export function fetchFindMeasurements(payload: Measurement[]): ActionTypes {
  return { type: FIND_MEASUREMENTS, payload };
}

export function fetchFindProducts(payload: Product[]): ActionTypes {
  return { type: FIND_PRODUCTS, payload };
}
