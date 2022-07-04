import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAuthDetails } from 'src/app/extra-packs/interfaces/general-interfaces';
import { BackendService } from 'src/app/services/backend/backend.service';

@Component({
  selector: 'art-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loggedIn!: boolean;
  error!: string;
  authDetails!: IAuthDetails;
  presentYear = new Date().getFullYear();

  constructor(
    private authService: BackendService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = Boolean(sessionStorage.getItem('authenticated'));
    if (this.loggedIn) this.router.navigateByUrl('/admin');
    this.authDetails = {
      email: '',
      password: ''
    };

  }

  handleLoginState(form: NgForm) {
    if (this.loggedIn) {
      // process logout
    } else {
      // process login
      this.authService.login(this.authDetails).subscribe(
        (resp: any) => {
          this.authService.setAccessToken(resp['access-token']);
          this.router.navigateByUrl('/admin');
        },
        error => {
          this.error = error.error;
        });
    }
  }

  formChange(form: HTMLInputElement) {
    console.log(form.type);
  }

}
