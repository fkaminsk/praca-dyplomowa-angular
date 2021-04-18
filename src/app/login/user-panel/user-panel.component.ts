import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  isLoggedIn = false;
  loggedAs: User;

  constructor(public auth: AuthService) {
  }

  async ngOnInit(): Promise<void> {
    await this.auth.getLoggedUser().subscribe(user => this.loggedAs = user);
    this.isLoggedIn = await this.auth.isLoggedIn();
  }
}
