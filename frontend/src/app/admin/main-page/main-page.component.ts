import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OfferInterface, SectionItemInterface, IState } from 'src/app/extra-packs/interfaces/general-interfaces';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'art-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnChanges {

  savedState!: IState;
  sectionsAddFormVisible = false;
  offersAddFormVisible = false;
  services!: Observable<SectionItemInterface[]>;
  offers!: Observable<OfferInterface[]>;
  offersVisibility = false;
  activeService!: SectionItemInterface;
  activeOffer!: OfferInterface;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.saveState();
    console.log('changes');
  }

  ngOnInit(): void {
    this.services = this.adminService.services;
    this.offers = this.adminService.offers;
    this.setState();
    if (this.offersVisibility) {
      this.loadOffers(this.activeService.uhash);
    }
  }

  setState() {
    const savedState = sessionStorage.getItem('saved_state');
    if(savedState) {
      this.savedState = JSON.parse(savedState);
      this.sectionsAddFormVisible = Boolean(this.savedState.sectionsAddFormVisible);
      this.offersAddFormVisible = Boolean(this.savedState.offersAddFormVisible);
      this.offersVisibility = Boolean(this.savedState.offersVisibility);
      this.activeService = this.savedState.activeService;
      this.activeOffer = this.savedState.activeOffer;
    }else{
      this.savedState = {
        offersAddFormVisible: this.offersAddFormVisible,
        offersVisibility: this.offersVisibility,
        sectionsAddFormVisible: this.sectionsAddFormVisible,
        activeOffer: this.activeOffer,
        activeService: this.activeService
      }
    } 
  }

  saveState() {
    this.savedState.activeService = this.activeService;
    this.savedState.activeOffer = this.activeOffer;
    sessionStorage.setItem('saved_state', JSON.stringify(this.savedState));
  }

  toggleSectionAddFormVisiblity() {
    this.sectionsAddFormVisible = !this.sectionsAddFormVisible;
    this.savedState.sectionsAddFormVisible = this.sectionsAddFormVisible
    this.saveState();
  }

  toggleOffersAddFormVisibility() {
    this.offersAddFormVisible = !this.offersAddFormVisible;
    this.savedState.offersAddFormVisible = this.offersAddFormVisible;
    this.saveState();
  }

  toggleOffersVisibility(section?: SectionItemInterface) {
    const useSection = section ? section : this.activeService;
    this.adminService.getOffersForService(useSection.uhash);
    this.setActiveService(useSection);
    this.offersVisibility = !this.offersVisibility;
    this.savedState.offersVisibility = this.offersVisibility;
    this.saveState();
  }

  deleteSection(section_hash: string) {
    this.adminService.deleteSection(section_hash).subscribe(response => {
      console.log(response);
    });
  }

  deleteOffer(section_hash: string, offer_hash?: string) {
    if (offer_hash) {
      this.adminService.deleteOffer(offer_hash, section_hash).subscribe(res => {
        console.log(res);
      });
    }
  }

  setActiveService(service: SectionItemInterface) {
    this.activeService = service;
  }

  setActiveOffer(offer: OfferInterface) {
    this.activeOffer = offer;
  }

  toOfferPage(offer: OfferInterface) {
    const queryParams = {offer: offer.uhash}
    this.router.navigate(['order'], {
      queryParams: queryParams
    });
  }

  loadOffers(section_hash: string) {
    this.adminService.getOffersForService(section_hash);
  }

}
