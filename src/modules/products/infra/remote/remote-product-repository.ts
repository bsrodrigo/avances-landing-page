/* eslint-disable @typescript-eslint/indent */
import { api } from "@/modules/core/utils";
import { Measurement, Product } from "@/modules/products/domain";

export class RemoteProductRepository {
  async createProduct(data: Product): Promise<Product> {
    const response = await api.post(`product`, data);
    console.log({ response });
    const responseData: Product = response.data;

    return responseData;
  }

  async findProducts(): Promise<Product[]> {
    const response = await api.get(`product`);
    console.log({ response });
    const responseData: Product[] = response.data;

    return responseData;
  }

  async findMeasurements(): Promise<Measurement[]> {
    const response = await api.post(`product`);
    const responseData: Measurement[] = response.data;

    return responseData;
  }
}
