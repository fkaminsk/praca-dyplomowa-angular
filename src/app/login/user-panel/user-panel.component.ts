import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  @Input() loggedAs: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
