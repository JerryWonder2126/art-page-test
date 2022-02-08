import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'art-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  @Output() DeleteImage = new EventEmitter<FormData>();
  fd!: FormData;
  @Input() imageURLs!: string[];

  constructor() { }

  ngOnInit(): void {
    if (!this.imageURLs) {
      this.imageURLs = [];
    }
  }

  deleteImage(imageName: string) {
    if (this.imageURLs.length > 1) {
      this.fd = new FormData();
      const imageIndex = this.imageURLs.indexOf(imageName);
      const nameToDelete = this.imageURLs.splice(imageIndex, 1);
      const data = {
        nameToDelete,
        'updateWith': this.imageURLs
      }
      this.fd.set('data', JSON.stringify(data));
      this.DeleteImage.emit(this.fd);
    }
  }

}
