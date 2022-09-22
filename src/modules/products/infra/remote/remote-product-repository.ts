/* eslint-disable @typescript-eslint/indent */
import { api } from "@/modules/core/utils";
import { Measurement, Product } from "@/modules/products/domain";

export class RemoteProductRepository {
  async findProducts(): Promise<Product[]> {
    const httpResponse = await api.post(`product`);
    const responseData: Product[] = httpResponse.data;

    return responseData;
  }

  async findMeasurements(): Promise<Measurement[]> {
    const httpResponse = await api.post(`product`);
    const responseData: Measurement[] = httpResponse.data;

    return responseData;
  }
}
