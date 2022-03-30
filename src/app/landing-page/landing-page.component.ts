import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  services!: Observable<SectionItemInterface[]>;
  activeSection!: SectionItemInterface;

  constructor(private offersService: OffersService, private router: Router) { }

  ngOnInit(): void {
    this.services = this.offersService.services;
    this.offersService.services.subscribe(resp => this.activeSection = resp[0]);
  }

  openSection () {
    this.router.navigate(['section'], {
      queryParams: {'section': this.activeSection.uhash, 'title': this.activeSection.title}
    });
  }

  changeSection = (offer: SectionItemInterface) => {
    this.activeSection = offer;
  };

}
