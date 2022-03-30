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

  constructor() { }

  ngOnInit(): void {
  }

  processForm(formObject: NgForm) {}

}
