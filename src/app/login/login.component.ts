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

  constructor(private apiService: BackendApiService, private router: Router, private auth: AuthService) {
  }

  currentUser: User;
  isLoggedIn: boolean;
  login: string;
  password: string;
  message: any;

  @Output() loginEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  async doLogin() {
    this.isLoggedIn = await this.auth.login(this.login, this.password);
    if (this.isLoggedIn) {
      this.auth.getCurrentUser().subscribe(response => this.currentUser = response);
      this.loginEvent.emit(this.currentUser);
      this.router.navigateByUrl('/register', {skipLocationChange: true}).then(() =>
        this.router.navigate(['/']));
    }
  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }
}
