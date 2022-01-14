import { Injectable } from '@angular/core';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private backendService: BackendService) { }

  sendToWhatsapp(form: FormData) {
    return this.backendService.getConnectLink('whatsapp', form);
  }
  sendToTelegram(form: FormData) {
    return this.backendService.getConnectLink('telegram', form);
  }
}
