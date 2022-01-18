import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OfferInterface, SectionItemInterface } from 'src/app/extra-packs/interfaces/general-interfaces';
import { OffersService } from '../offers.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _offers: BehaviorSubject<OfferInterface[]> = new BehaviorSubject<OfferInterface[]>([]);
  private _services: BehaviorSubject<SectionItemInterface[]> = new BehaviorSubject<SectionItemInterface[]>([]);

  constructor(private offersService: OffersService) {
    this.init();
  }

  init() {
    this.offersService.services.subscribe(res => {
      this._services.next(res);
    });
    this.offersService.offers.subscribe(response => {
      this._offers.next(response);
    });
  }

  get offers() {
    return this._offers.asObservable();
  }

  get services() {
    return this._services.asObservable();
  }

  addOffer(form: FormData, section_hash: string): Observable<any> {
    return this.offersService.addOffer(form, section_hash);
  }

  deleteOffer(uhash: string, section_hash: string): Observable<any> {
    return this.offersService.deleteOffer(uhash, section_hash);
  }

  updateOffer(form: FormData, section_hash: string) {
    return this.offersService.updateOffer(form, section_hash);
  }

  updateOfferImages(form: FormData, section_hash: string) {
    return this.offersService.updateOfferImages(form, section_hash);
  }

  addSection(form: FormData): Observable<any> {
    return this.offersService.addSection(form);
  }

  updateSectionTitle(body: any) {
    return this.offersService.updateSectionTitle(body)
  }

  updateSectionImgURL(body: any) {
    return this.offersService.updateSectionImgURL(body)
  }

  deleteSection(uhash: string): Observable<any> {
    return this.offersService.deleteSection(uhash);
  }

  getOffersForService(section_hash: string) {
    this.offersService.getOffersForService(section_hash)
  }

}
