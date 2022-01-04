import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainDataInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss']
})
export class SectionPageComponent implements OnInit {


  title!: string;
  offerForService!: MainDataInterface;

  constructor(private offersService: OffersService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.title = decodeURIComponent(params.type);
    });
  }

  ngOnInit(): void {
    let returnedOffers = this.fetchOffersForServices();
    
    if(returnedOffers) {
      this.offerForService = returnedOffers;
    }
  }

  reloadPage(title: string) {
    this.title = title;
    console.log('event ran');
    this.ngOnInit();
  }

  fetchOffersForServices() {
    return this.offersService.getDataByService(this.title);
  }

}
