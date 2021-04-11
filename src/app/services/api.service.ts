import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user.model';
import {AppSettings} from '../../enums/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  public registerUser(user: User) {
    return this.http.post<User>(AppSettings.BACKEND_SERVER_URL + '/register', user);
  }

  public getUsers() {
    return this.http.get<User[]>(AppSettings.BACKEND_SERVER_URL + '/users');
  }
}
