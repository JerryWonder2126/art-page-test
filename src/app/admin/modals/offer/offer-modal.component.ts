import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OfferInterface } from 'src/app/extra-packs/interfaces/general-interfaces';

@Component({
  selector: 'art-offer-modal',
  templateUrl: './offer-modal.component.html',
  styleUrls: ['./offer-modal.component.scss']
})
export class OfferModalComponent implements OnInit {

  @Input() offer!: OfferInterface;
  @Input() action!: string;
  @Output() deleteButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteActionApprove() {
    this.deleteButtonClicked.emit();
  }

}
