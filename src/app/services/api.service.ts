import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './authentication.service';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient, private authentication: AuthService) {
  }

  public registerUser(user: User) {
    return this.http.post('http://localhost:8080/register', user);
  }

  public getUsers(): Promise<User[]> {
    let users;
    this.http.get<User[]>('http://localhost:8080/users').subscribe(u => users = u);
    return users;
  }
}
