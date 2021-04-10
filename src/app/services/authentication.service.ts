import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  public authenticate(login: string, password: string, callback) {
    const headers = new HttpHeaders(login && password ?
      {Authorization: 'Basic ' + btoa(login + ':' + password)} : {});
    this.http.get('http://localhost:8080/login', {headers}).subscribe(response => {
      response ? this.authenticated = true : this.authenticated = false;
      return callback && callback();
    });
  }
}
