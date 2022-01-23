import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadTime: any;

  constructor() { }

  get loading () {
    return this._loading.asObservable();
  }

  show() {
    this._loading.next(true);
  }

  hide() {
    setTimeout(() => {
      this._loading.next(false);
    }, 1000);
  }
}
