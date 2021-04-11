import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  message: any;

  constructor(private apiService: ApiService, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }

  logIn() {
    this.auth.login(this.login, this.password);
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
  }
}
