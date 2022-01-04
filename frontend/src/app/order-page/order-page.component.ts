import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainDataInterface, SectionInnerItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, OnChanges {

  service!: string;
  title!: string;
  descState: boolean = true;
  formState: boolean = !this.descState;
  offer!: SectionInnerItemInterface;
  relatedOffers!: MainDataInterface;

  constructor(private offerService: OffersService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.service = params.type;
      this.title = params.id;
    });
  }

  ngOnInit(): void {
    let returnedOffer = this.getOffer();
    let returnedServices = this.getRelatedServices();
    if (returnedOffer) {
      this.offer = returnedOffer;
    }
    if (returnedServices) {
      this.relatedOffers = returnedServices;
    }
  }

  ngOnChanges(): void { }

  getOffer() {
    return this.offerService.getOffer(this.service, this.title);
  }

  getRelatedServices () {
    return this.offerService.getDataByService(this.service);
  }

  showDesc() {
    this.descState = true;
    this.formState = !this.descState;
  }

  showForm() {
    this.formState = true;
    this.descState = !this.formState;
  }
}
