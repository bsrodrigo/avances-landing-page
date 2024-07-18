/* eslint-disable @typescript-eslint/indent */
import { api } from "@/modules/core/utils";
import { Measurement, Product } from "@/modules/inventory/domain";

export class RemoteProductRepository {
  async createProduct(data: Product): Promise<Product> {
    const dataFormatted = {
      ...data,
      _measurement: data.measurement?.id,
      isInactive: !data.isActive,
    };
    const response = await api.post(`product`, dataFormatted);
    const responseData: Product = {
      ...response.data,
      id: response.data?._id,
      isActive: !response.data?.isInactive,
      measurement: { id: response.data?._measurement },
    };

    return responseData;
  }

  async deleteProduct(id: string): Promise<void> {
    await api.delete(`product/${id}`);
  }

  async findProducts(): Promise<Product[]> {
    const response = await api.get(`product`);
    const responseData: Product[] = response.data?.map((product: any) => ({
      ...product,
      id: product?._id,
      isActive: !product?.isInactive,
      measurement: { id: product?._measurement },
    }));

    return responseData;
  }

  async findMeasurements(): Promise<Measurement[]> {
    const response = await api.get(`measurement`);
    const responseData: Measurement[] = response.data?.map(
      ({ _id, acronym, description }: any) => ({
        id: _id,
        acronym,
        description,
      })
    );

    return responseData;
  }

  async updateProduct(data: Product): Promise<Product> {
    const dataFormatted = {
      ...data,
      _measurement: data.measurement?.id,
      isInactive: !data.isActive,
    };

    const response = await api.patch(`product/${data?.id}`, dataFormatted);
    const responseData: Product = {
      ...response.data,
      id: response.data?._id,
      isActive: !response.data?.isInactive,
      measurement: { id: response.data?._measurement },
    };

    return responseData;
  }
}
