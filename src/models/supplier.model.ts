export class Supplier {
  constructor(supplierId, companyName, country) {
    this.supplierId = supplierId;
    this.companyName = companyName;
    this.country = country;
  }

  readonly supplierId: number;
  readonly companyName: string;
  readonly country: string;
}
