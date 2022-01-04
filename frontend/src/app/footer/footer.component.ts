import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'art-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  extendCopyRightText!: string;
  currentYear = new Date().getFullYear();
  is2021 = this.currentYear !== 2021;

  constructor() { }

  ngOnInit(): void {
  }

}
