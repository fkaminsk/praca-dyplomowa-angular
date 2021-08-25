export class Product {

  constructor(productId, name, shortDescription, description, image, categoryName, supplier, price, inStock) {
    this.productId = productId;
    this.name = name;
    this.shortDescription = shortDescription;
    this.description = description;
    this.image = image;
    this.categoryName = categoryName;
    this.supplier = supplier;
    this.inStock = inStock;
  }

  productId: number;
  name: string;
  shortDescription: string;
  description: string;
  image: any;
  categoryName: string;
  supplier: string;
  price: number;
  inStock: number;
}
