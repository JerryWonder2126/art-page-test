import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class ImageSnippet {
  constructor (public src: string, public file: File) { }
}
@Component({
  selector: 'art-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  fd = new FormData();
  price: string = 'single';

  constructor() { }

  ngOnInit(): void {
  }

  processForm(formObject: NgForm) {
    console.log('valid:', formObject.valid);
    console.log(formObject.value);
  }

  processImage(image: any) {
    const file: File = image.files[0];
    const reader = new FileReader();

    // reader.addEventListener('load', (event: any) => {
    //   this.fd.append('image', new ImageSnippet(event.target.result, file));
    // });
  }

}
