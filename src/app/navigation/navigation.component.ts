import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OfferInterface, SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() services!: Observable<SectionItemInterface[]>;
  @Output() NavBtnClicked: EventEmitter<any> = new EventEmitter<any>();
  menuExpanded: boolean = false;

  constructor (private offersService: OffersService, private router: Router) {  }

  ngOnInit(): void { }

  openSection (service: OfferInterface) {
    const queryParams: Params = {'section': service.uhash, 'title': service.title};
    this.router.navigate(['section'], {
      queryParams: queryParams
    });
  }

  toggleMenuValue () {
    this.menuExpanded = !this.menuExpanded;
  }
}
