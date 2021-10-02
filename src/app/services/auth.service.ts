import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AppSettings} from '../../enums/AppSettings';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import {User} from '../../models/user.model';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  async login(login: string, password: string) {
    this.logout();
    await this.http.post<any>(AppSettings.BACKEND_SERVER_URL + '/authenticate', {login, password})
      .toPromise().then(response => {
        this.setSession(response);
      }).catch((err) => console.log(err));
    return localStorage.getItem('id_token') !== undefined;
  }

  setSession(authResult) {
    localStorage.setItem('id_token', authResult.jwt);
    localStorage.setItem('expires_at', moment(authResult.expiresAt).toISOString());
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(moment(localStorage.getItem('expires_at')));
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getCurrentUser() {
    return this.http.get<User>(AppSettings.BACKEND_SERVER_URL + '/user');
  }

  getLogin() {
    if (this.isLoggedIn()) {
      return new JwtHelper().decodeToken(localStorage.getItem('id_token')).sub;
    }
  }

  isAdmin() {
    return this.getLogin() === 'admin';
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('id_token');

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + idToken)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
