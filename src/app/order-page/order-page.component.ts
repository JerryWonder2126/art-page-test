import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OfferInterface, SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  offer_hash!: string;
  descState: boolean = true;
  formState: boolean = !this.descState;
  offer!: OfferInterface;
  latestOffers!: Observable<OfferInterface[]>;
  relatedOffers!: OfferInterface[];
  fd: FormData = new FormData();
  services!: Observable<SectionItemInterface[]>;
  btnClick = false; // To control autofocus when order button gets clicked on page
  

  constructor(private offerService: OffersService, private route: ActivatedRoute) {
    this.getOffer();
    this.latestOffers = this.offerService.getLatestOffers();
    this.relatedOffers = this.offerService.getCurrentOffers();
  }

  ngOnInit(): void {
    this.services = this.offerService.services;
  }

  getOffer() {
    this.route.queryParams.subscribe(params => {
      this.offer_hash = params.offer;
      this.offerService.getOffer(this.offer_hash).subscribe(resp => {this.offer = resp});
    });
  }

  // getRelatedServices () {
  //   return this.offerService.getDataByService(this.service);
  // }

  showDesc() {
    this.descState = true;
    this.formState = !this.descState;
  }

  showForm() {
    this.formState = true;
    this.descState = !this.formState;
  }

  processAddForm(form: NgForm) {}

  addImage(ev: any) {
    const file = ev.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.fd.append('image', (new ImageSnippet(event.target.result, file)).file);
    });
    
  }

  resetFocus() {
    this.btnClick = true;
  }
}

class ImageSnippet {
  constructor (public src: string, public file: File) { }
}
