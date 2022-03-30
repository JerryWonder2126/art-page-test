import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OfferInterface, SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';
import { SocialService } from '../services/social/social.service';

@Component({
  selector: 'art-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  services!: Observable<SectionItemInterface[]>;
  latestOffers!: Observable<OfferInterface[]>;
  fd: FormData = new FormData();

  ownersNumber: string = '2348154955526';

  constructor(private router: Router, private offersService: OffersService, private socialService: SocialService) { }

  ngOnInit(): void {
    this.services = this.offersService.services;
    this.latestOffers = this.offersService.getLatestOffers();
  }

  processForm(form: NgForm) {
    if (form.valid) {
      this.fd.set('data', JSON.stringify(form.value));
    }
    return form.valid;
  }
  sendToWhatsapp(form: NgForm) {

    const valid = this.processForm(form);
    if (valid) {
      this.socialService.sendToWhatsapp(this.fd).subscribe(res => {
        location.href = res;
      });
    }
  }

  sendToTelegram(form: NgForm) {
    const valid = this.processForm(form);
    if (valid) {
      this.socialService.sendToTelegram(this.fd).subscribe();
    }
  }

  openSection (uhash: string, title: string) {
    this.router.navigate(['section'], {
      queryParams: {'section': uhash, 'title': title}
    });
  }

}
