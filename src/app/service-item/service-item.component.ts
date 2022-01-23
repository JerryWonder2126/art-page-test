import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Params, Router } from '@angular/router';
import { OfferInterface } from '../extra-packs/interfaces/general-interfaces';

@Component({
  selector: 'art-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() service!: OfferInterface;
  @Output() OrderBtnClicked: EventEmitter<any> = new EventEmitter<any>();
  queryParams!: Params;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.queryParams = {offer: this.service.uhash}
  }

  orderButtonClicked() {
    this.OrderBtnClicked.emit();
    this.router.navigate(['order'], {
      queryParams: this.queryParams
    });
  }

}
