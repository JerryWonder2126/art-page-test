import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendResponseInterface, OfferInterface, SectionItemInterface } from 'src/app/extra-packs/interfaces/general-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private BASE_URL = 'http://localhost:3000/resources';
  private SECTIONS_URL = `${this.BASE_URL}/sections/`;
  private OFFERS_URL = `${this.BASE_URL}/offers/`;

  private _sections: BehaviorSubject<SectionItemInterface[]> = new BehaviorSubject<SectionItemInterface[]>([]);

  private _offers: BehaviorSubject<OfferInterface[]> = new BehaviorSubject<OfferInterface[]>([]);

  get sections() {
    return this._sections.asObservable();
  }

  get offers() {
    return this._offers.asObservable();
  }

  constructor(private http: HttpClient) {
    this.loadAllSections();
  }

  private loadAllSections() {
    this.http.get<BackendResponseInterface>(this.SECTIONS_URL, {observe: 'body', responseType: 'json'}).subscribe((response) => {
      if(!response.error) {
        this._sections.next(response.rows.reverse());
      }
    });
  }

  addSection(body: any) {
    return this.http.post<BackendResponseInterface>(this.SECTIONS_URL, body).pipe(map(response => {
      if(!response.error) {
        this.loadAllSections();
      }
      return response.rows;
    })
    );
  }

  private _updateSection(type: string, body: any) {
    return this.http.put<BackendResponseInterface>(`${this.SECTIONS_URL}?type=${type}`, body).pipe(map(resp => {
      this.loadAllSections();
      return resp.rows;
    }));
  }

  updateSectionTitle(body: any) {
    return this._updateSection('title', body);
  }

  updateSectionImgURL(body: any) {
    return this._updateSection('imgurl', body);
  }

  deleteSection(uhash: string) {
    return this.http.delete<BackendResponseInterface>(`${this.SECTIONS_URL}?section_hash=${uhash}`).pipe(map(res => {
      this.loadAllSections();
      return res;
    }));;
  }

  // Manage Offers
  addOffer(fd: FormData, section_hash: string) {
    return this.http.post<BackendResponseInterface>(this.OFFERS_URL, fd).pipe(map(res => {
      this.getOffersForService(section_hash);
      return res;
    }));
  }

  updateOfferText(fd: FormData, section_hash: string) {
    return this.http.put<BackendResponseInterface>(`${this.OFFERS_URL}?type=text`, fd).pipe(map(resp => {
      this.getOffersForService(section_hash);
      return resp.rows;
    }));
  }

  updateOfferImages(fd: FormData, section_hash: string) {
    return this.http.put<BackendResponseInterface>(`${this.OFFERS_URL}?type=imgurl`, fd).pipe(map(resp => {
      this.getOffersForService(section_hash);
      return resp.rows;
    }));
  }

  // updateOfferImages(form: FormData, section_hash: string) {
  //   return this.http.put<BackendResponseInterface>(this.OFFERS_URL+'kl', form).pipe(map(resp => {
  //     this.getOffersForService(section_hash);
  //     return resp.rows;
  //   }));;
  // }

  deleteOffer(uhash: string, section_hash: string) {
    return this.http.delete<BackendResponseInterface>(`${this.OFFERS_URL}?offer_hash=${uhash}`).pipe(map(res => {
      this.getOffersForService(section_hash);
      return res;
    }));;
  }

  getOffersForService(service_hash:string) {
    const getOffer$ = this.http.get<BackendResponseInterface>(`${this.OFFERS_URL}?section=${service_hash}`);
    getOffer$.subscribe(response => {
      this._offers.next(response.rows.reverse() as OfferInterface[]);
    });
  }

  getConnectLink(type: string, form: FormData) {
    return this.http.post<BackendResponseInterface>(`${this.BASE_URL}/social/?type=${type}`, form).pipe(map(response => response.rows));
  }
 
}
