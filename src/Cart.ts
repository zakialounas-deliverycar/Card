import { Storable } from "./interfaces/Storable";
import { Product } from "./models/Product";

export class Cart {
  constructor(private storage: Storable<Product>) {}

  addProduct(product: Product): void {
    this.storage.add(product);
  }

  removeProduct(product: Product): void {
    this.storage.remove(product);
  }

  getProducts(): Product[] {
    return this.storage.getAll();
  }

  getTotalPrice(): number {
    return this.getProducts().reduce(
      (total, product) => total + product.price,
      0
    );
  }
}
