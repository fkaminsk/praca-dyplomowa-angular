import {Supplier} from './supplier.model';

export class NewProduct {

  constructor(name, shortDescription, description, categoryName, supplier, price, inStock) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.categoryName = categoryName;
    this.supplier = supplier;
    this.inStock = inStock;
  }

  name: string;
  shortDescription: string;
  description: string;
  categoryName: string;
  supplier: Supplier;
  price: number;
  inStock: number;
}
