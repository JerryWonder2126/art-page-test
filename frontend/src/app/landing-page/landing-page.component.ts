import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  services!: Observable<SectionItemInterface[]>;

  constructor(private offersService: OffersService) { }

  ngOnInit(): void {
    this.services = this.offersService.services;
  }

}
