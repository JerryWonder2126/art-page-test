import { Component, OnInit } from '@angular/core';
import { SectionItemInterface } from './extra-packs/interfaces/general-interfaces';
import { OffersService } from './services/offers.service';

@Component({
  selector: 'art-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'art-page';
}
