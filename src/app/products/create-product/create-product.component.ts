import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendApiService} from '../../services/backend-api.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewProduct} from '../../../models/new-product.model';
import {Supplier} from '../../../models/supplier.model';
import {Category} from '../../../enums/Category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  suppliers: Supplier[];
  categories = [Category.SPEAKERS, Category.GUITARS, Category.BASSGUITARS, Category.VIOLINS, Category.DRUMS, Category.AMPS];
  productBlob = new FormData();
  newProduct: NewProduct;
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    shortDescription: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categoryName: new FormControl('', Validators.required),
    supplier: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    inStock: new FormControl('', Validators.required)
  });

  constructor(private route: ActivatedRoute, private api: BackendApiService, public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.api.getSuppliers().subscribe(response => this.suppliers = response);
  }

  get name() {
    return this.productForm.get('name');
  }

  getImageData(event: FormData) {
    this.productBlob = event;
  }

  onCreate() {
    if (!this.productBlob.has('image')) {
      this.productBlob.append('image', new Blob(), 'image');
    }

    this.newProduct = new NewProduct(
      this.productForm.get('name').value,
      this.productForm.get('shortDescription').value,
      this.productForm.get('description').value,
      this.productForm.get('categoryName').value,
      this.productForm.get('supplier').value,
      this.productForm.get('price').value,
      this.productForm.get('inStock').value
    );

    this.productBlob.append('product', new Blob([JSON.stringify(this.newProduct)], {type: 'application/json'}));
    this.api.createProduct(this.productBlob).subscribe(response => {
      if (response.status !== 200) {
        console.log('failed!');
      }
    });
  }
}
