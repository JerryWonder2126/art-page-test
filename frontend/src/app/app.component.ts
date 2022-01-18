import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'art-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'art-page';
  loading!: Observable<boolean>;

  constructor(private loaderService: LoaderService) {}
  ngOnInit(): void {
    this.loading = this.loaderService.loading;
  }

  
}
