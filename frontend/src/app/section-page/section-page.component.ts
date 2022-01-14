import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MainDataInterface, OfferInterface, SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss']
})
export class SectionPageComponent implements OnInit {


  title!: string;
  section!: string;
  offers!: Observable<OfferInterface[]>;
  offersReady!: boolean;
  services!: Observable<SectionItemInterface[]>;

  constructor(private offersService: OffersService, private route: ActivatedRoute) {}
  
  loadVars() {
    this.route.queryParams.subscribe(params => {
      this.section = decodeURIComponent(params.section);
      this.title = decodeURIComponent(params.title);
      this.offersService.getOffersForService(this.section);
    });    
  }

  ngOnInit(): void {
    this.offers = this.offersService.offers;
    this.services = this.offersService.services;
    this.loadVars();
  }

}
