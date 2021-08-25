import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {BackendApiService} from '../../services/backend-api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  productId: number;
  product: Product;

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
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
    console.log(this.selectedFile);
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


  getImage() {

    // this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
    //   .subscribe(
    //     res => {
    //       this.retrieveResonse = res;
    //       this.base64Data = this.retrieveResonse.picByte;
    //       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    //     }
    //   );
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
}
