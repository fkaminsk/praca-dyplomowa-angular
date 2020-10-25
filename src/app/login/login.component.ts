import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;
  message: any;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  logIn() {
    const response = this.apiService.login(this.login, this.password);
    response.subscribe(data => {
      this.message = data;
      this.router.navigate(['/']);
    });

  }
}
