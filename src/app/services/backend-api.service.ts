import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user.model';
import {AppSettings} from '../../enums/AppSettings';
import {ValidationResultModel} from '../../models/validationResult.model';
import {Product} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) {
  }


  public registerUser(user: User) {
    return this.http.post<ValidationResultModel>(AppSettings.BACKEND_SERVER_URL + '/register', user);
  }

  public getUsers() {
    return this.http.get<User[]>(AppSettings.BACKEND_SERVER_URL + '/users');
  }

  public getProducts() {
    return this.http.get<Product[]>(AppSettings.BACKEND_SERVER_URL + '/products');
  }
}
