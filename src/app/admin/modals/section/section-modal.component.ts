import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionItemInterface } from 'src/app/extra-packs/interfaces/general-interfaces';
import { ServiceItemComponent } from 'src/app/service-item/service-item.component';

@Component({
  selector: 'art-section-modal',
  templateUrl: './section-modal.component.html',
  styleUrls: ['./section-modal.component.scss']
})
export class SectionModalComponent implements OnInit {

  @Input() service!: SectionItemInterface;
  @Input() action!: string;
  @Output() deleteButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteActionApprove() {
    this.deleteButtonClicked.emit();
  }

}
