import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  loggedUser: User;
  isLoggedIn: boolean;


  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.onLogin();
  }

  onLogin() {
    this.isLoggedIn = this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.auth.getCurrentUser().subscribe(response => this.loggedUser = response);
    }
  }
}
