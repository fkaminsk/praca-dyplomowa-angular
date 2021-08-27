import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BackendApiService} from '../services/backend-api.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: BackendApiService, private router: Router, public auth: AuthService) {
  }

  currentUser = new User('', '', '');
  login: string;
  password: string;
  message: any;

  @Output() loginEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.auth.getCurrentUser().subscribe(response => this.currentUser = response);
    }
  }

  async doLogin() {
    await this.auth.login(this.login, this.password);
    if (this.auth.isLoggedIn()) {
      this.auth.getCurrentUser().subscribe(response => this.currentUser = response);
      this.loginEvent.emit(this.currentUser);
      this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() =>
        this.router.navigate(['/']));
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/']));
  }
}
