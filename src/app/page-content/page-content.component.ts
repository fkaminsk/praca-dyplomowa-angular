import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {User} from '../../models/user.model';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  constructor(private api: ApiService, private auth: AuthService) {
  }

  users: User[];

  ngOnInit(): void {
    this.api.getUsers().subscribe(response => {
      this.users = response;
    });
  }
}
