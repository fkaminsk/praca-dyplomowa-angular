import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendApiService} from '../../services/backend-api.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Output() upload: EventEmitter<any> = new EventEmitter();

  selectedFile: File;
  message: string;
  imageName: any;

  constructor(private route: ActivatedRoute, private api: BackendApiService) {
  }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    this.upload.emit(uploadImageData);
  }
}
