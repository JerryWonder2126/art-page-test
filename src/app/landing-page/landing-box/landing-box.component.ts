import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Params, Router } from '@angular/router';

@Component({
  selector: 'art-landing-box',
  templateUrl: './landing-box.component.html',
  styleUrls: ['./landing-box.component.scss']
})
export class LandingBoxComponent implements OnInit {

  @Input() title!: string;
  @Input() imgUrl!: string;
  @Input() uhash!: string;
  @Output() sectionClicked: EventEmitter<any> = new EventEmitter<any>();
  urlString!: string;
  queryParams!: Params;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.queryParams = {'section': this.uhash, 'title': this.title};
  }

  changeSection(): void {
    this.sectionClicked.emit();
  }

  openSection () {
    this.router.navigate(['section'], {
      queryParams: {'section': this.uhash, 'title': this.title}
    });
  }

}
