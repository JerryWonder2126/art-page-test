import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OfferInterface, SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  services!: Observable<SectionItemInterface[]>;
  latestOffers!: Observable<OfferInterface[]>;

  constructor(private router: Router, private offersService: OffersService) { }

  ngOnInit(): void {
    this.services = this.offersService.services;
    this.latestOffers = this.offersService.getLatestOffers();
  }

  toContactPage() {
    this.router.navigate(['contact']);
  }

  openSection (uhash: string, title: string) {
    this.router.navigate(['section'], {
      queryParams: {'section': uhash, 'title': title}
    });
  }

}
