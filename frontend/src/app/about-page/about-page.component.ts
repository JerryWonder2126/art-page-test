import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  services!: Observable<SectionItemInterface[]>;

  constructor(private router: Router, private offersService: OffersService) { }

  ngOnInit(): void {
    this.services = this.offersService.services;
  }

  toContactPage() {
    this.router.navigate(['contact']);
  }

}
