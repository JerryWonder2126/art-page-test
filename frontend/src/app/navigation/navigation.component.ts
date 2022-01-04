import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Params, Router } from '@angular/router';
import { SectionItemInterface } from '../extra-packs/interfaces/general-interfaces';
import { OffersService } from '../services/offers.service';

@Component({
  selector: 'art-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  services!: SectionItemInterface[];
  queryParams!: Params;
  @Output() NavBtnClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor (private offersService: OffersService, private router: Router) {  }

  ngOnInit(): void {
    this.services = this.offersService.getServices();
  }

  openSection (title: string) {
    // this.queryParams = {'type': title};
    // this.router.navigate(['section'], {
    //   queryParams: this.queryParams
    // });
    this.NavBtnClicked.emit(title);
    console.log('done');
  }


}
