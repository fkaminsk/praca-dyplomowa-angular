import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Output() upload: EventEmitter<any> = new EventEmitter();

  selectedFile: File;
  selectedFileName = 'choose image for the product';
  message: string;
  imageName: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    this.upload.emit(uploadImageData);
  }
}
