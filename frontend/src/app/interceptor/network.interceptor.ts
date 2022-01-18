import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader/loader.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  completedRequest = 0;
  totalRequest = 0;

  constructor(private loader: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    this.totalRequest++;
    return next.handle(request).pipe(finalize(() => {
      this.completedRequest++;
      if (this.completedRequest === this.totalRequest) {
        this.loader.hide();
        this.completedRequest = 0;
        this.totalRequest = 0;
      }
      
    }));
  }
}
