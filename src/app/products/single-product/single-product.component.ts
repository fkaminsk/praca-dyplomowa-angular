import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendApiService} from '../../services/backend-api.service';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  productId: number;
  product: Product;

  selectedFile: File;
  message: string;
  imageName: any;


  constructor(private route: ActivatedRoute, private api: BackendApiService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('id');
    });
    this.api.getProduct(this.productId).subscribe(response => this.product = response);
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    this.api.updateProduct(this.productId, uploadImageData).subscribe( response => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully!';
      } else {
        this.message = 'Image upload failed!';
      }
    });
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
}
