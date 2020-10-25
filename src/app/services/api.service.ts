import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/user.model';
import {ValidationResultModel} from '../../models/validationResult.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public login(login: string, password: string) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(login + ':' + password)});
    return this.http.get('http://localhost:8080/', {headers, responseType: 'text' as 'json'});
  }

  public registerUser(user: User) {
    return this.http.post('http://localhost:8080/register', user);
  }

  public getUsers(): Promise<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users').toPromise();
  }
}
