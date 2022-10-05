/* eslint-disable @typescript-eslint/indent */
import { api } from "@/modules/core/utils";
import { Measurement, Product } from "@/modules/products/domain";

export class RemoteProductRepository {
  async createProduct(data: Product): Promise<Product> {
    const response = await api.post(`product`, data);
    const responseData: Product = { ...response.data, id: response.data?._id };

    return responseData;
  }

  async findProducts(): Promise<Product[]> {
    const response = await api.get(`product`);
    const responseData: Product[] = response.data?.map((product: any) => ({
      ...product,
      id: product?._id,
    }));

    return responseData;
  }

  async findMeasurements(): Promise<Measurement[]> {
    const response = await api.post(`product`);
    const responseData: Measurement[] = response.data;

    return responseData;
  }
}
