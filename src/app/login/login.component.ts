import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  @ViewChild('f') loginForm: NgForm;
  isLogged: boolean;
  isLogging = false;

  constructor(private apiService: ApiService, private router: Router, private auth: AuthService) {
  }

  async doLogin() {
    if (await this.auth.login(this.loginForm.value.login, this.loginForm.value.password)) {
      this.isLogged = this.auth.isLoggedIn();
      await this.router.navigate(['/user_panel']);
    }
  }
}
