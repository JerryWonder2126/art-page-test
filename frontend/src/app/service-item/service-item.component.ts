import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'art-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() title!: string;
  @Input() short_description!: string;
  @Input() imgURL!: string[];
  @Input() price!: string;
  @Input() service!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  orderButtonClicked() {
    this.router.navigate(['order', this.service, this.title]);
  }

}
