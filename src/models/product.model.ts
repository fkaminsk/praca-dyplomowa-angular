export class Product {

  constructor(name, categoryName, supplier, price, inStock) {
    this.name = name;
    this.categoryName = categoryName;
    this.supplier = supplier;
    this.inStock = inStock;
  }

  readonly id: number;
  name: string;
  categoryName: string;
  supplier: string;
  price: number;
  inStock: number;
}
