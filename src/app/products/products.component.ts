import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {BackendApiService} from '../services/backend-api.service';
import {AuthService} from '../services/auth.service';
import {User} from '../../models/user.model';
import {Role} from '../../enums/Role';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: Product[];
  pageOfItems: Product[];

  pageSize = 9;
  maxPages: number;
  initialPage: number;

  currentUser: User;

  constructor(public api: BackendApiService, public auth: AuthService) {
  }

  ngOnInit(): void {
    this.api.getProducts().subscribe(response => this.items = response);
    if (this.auth.isLoggedIn()) {
      this.auth.getCurrentUser().subscribe(response => this.currentUser = response);
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  isAdmin() {
    if (this.auth.isLoggedOut()) {
      return false;
    }
    return this.currentUser.role === Role.ROLE_ADMIN;
  }
}
