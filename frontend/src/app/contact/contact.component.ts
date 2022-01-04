import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'art-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ownersNumber: string = '2348154955526';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  processForm(form: NgForm) {
    console.log(form.value);
  }
  sendToWhatsapp(form: NgForm) {
    this.processForm(form);
    let message = `Hello, SinaArtz! ${form.value.message}. Thank you.`;
    let url = `https://wa.me/${this.ownersNumber}?text=${message}`;
    console.log(url);
    window.location.replace(url);
  }

  sendToTelegram(form: NgForm) {
    let token = "5023652672:AAFrGbchR6BMnn_XYuE55sOWwNLsqnSXolA";
    this.processForm(form);
    let message = `<b>Hello, SinaArtz!</b>\n\n${form.value.message}.\n\n<b>You can reach me through ${form.value.email}. Thank you.</b>`;
    let data = {
      chat_id: '1249927233',
      text: message,
      parse_mode: 'html'
    }
    let url = `https://api.telegram.org/bot${token}/sendMessage`;
    console.log(url);
    // window.location.replace(url);
    this.http.post(url, data).subscribe((obj) => {
      console.log(obj);
      //Show success alert
      form.reset()
    }, (err) => {
      //Show error alert
      console.log('error: ', err);
    })
  }

}
