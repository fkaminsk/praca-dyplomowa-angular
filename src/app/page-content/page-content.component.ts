import {Component, OnInit} from '@angular/core';
import {BackendApiService} from '../services/backend-api.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  constructor(private api: BackendApiService) {
  }

  users: User[];

  ngOnInit(): void {
    this.api.getUsers().subscribe(response => {
      this.users = response;
    });
  }
}
