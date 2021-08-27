import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  loggedUser: string;


  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.loggedUser = this.auth.getLogin();
  }

  onLogin(event: User) {
    if (this.auth.isLoggedIn) {
      this.loggedUser = event.login;
    }
  }
}
