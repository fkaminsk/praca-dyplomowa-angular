import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user.model';
import {AppSettings} from '../../enums/AppSettings';
import {ValidationResultModel} from '../../models/validationResult.model';
import {Product} from '../../models/product.model';
import {NewProduct} from '../../models/new-product.model';
import {Supplier} from '../../models/supplier.model';

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

  public getSuppliers() {
    return this.http.get<Supplier[]>(AppSettings.BACKEND_SERVER_URL + '/suppliers');
  }

  public getProducts() {
    return this.http.get<Product[]>(AppSettings.BACKEND_SERVER_URL + '/products');
  }

  public getProduct(id) {
    return this.http.get<Product>(AppSettings.BACKEND_SERVER_URL + '/' + id + '/product');
  }

  public createProduct(productBlob: FormData) {
    return this.http.post(AppSettings.BACKEND_SERVER_URL + '/product', productBlob, {
      observe: 'response'
    });
  }

  public deleteProduct(id: number) {
    return this.http.delete(AppSettings.BACKEND_SERVER_URL + '/' + id + '/product', {
      observe: 'response'
    });
  }

  public updateProduct(id, image) {
    return this.http.patch(AppSettings.BACKEND_SERVER_URL + '/' + id + '/product', image, {observe: 'response'});
  }
}
