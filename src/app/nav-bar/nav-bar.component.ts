import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../../models/user.model';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedAs: User;

  constructor(public auth: AuthService, private api: ApiService) {
  }

  async ngOnInit(): Promise<void> {
    await this.auth.getLoggedUser().subscribe(user => this.loggedAs = user);
  }

}
