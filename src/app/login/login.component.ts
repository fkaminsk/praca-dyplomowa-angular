import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  message: any;

  constructor(private apiService: ApiService, private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
    this.auth.authenticate(this.login, this.password, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }
}
