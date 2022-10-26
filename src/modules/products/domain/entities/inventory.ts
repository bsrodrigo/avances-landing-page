import { DateTime } from "@/modules/core/domain/entities/datetime";
import { Product } from "@/modules/products/domain";

export class Inventory {
  public readonly product: Product;
  public readonly quantity: number;
  public readonly updatedAt: Date;

  constructor(data: Inventory.Data) {
    this.product = data.product;
    this.quantity = data.quantity;
    this.updatedAt = DateTime.create(data?.updatedAt).value;
  }
}

export namespace Inventory {
  export type Data = {
    product: Product;
    quantity: number;
    updatedAt: Date | string;
  };
}
