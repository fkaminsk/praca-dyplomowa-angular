import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  login: string;
  password: string;
  message: any;

  constructor(private apiService: ApiService, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  async doLogin() {
    if (await this.auth.login(this.loginForm.value.login, this.loginForm.value.password)) {
      await this.router.navigate(['/']);
    }
  }
}
