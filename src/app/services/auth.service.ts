import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AppSettings} from '../../enums/AppSettings';
import * as moment from 'moment';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  async login(login: string, password: string) {
    await this.http.post<any>(AppSettings.BACKEND_SERVER_URL + '/authenticate', {login, password})
      .toPromise().then(response => {
        this.setSession(response);
      }).catch((err) => console.log(err));
    return this.isLoggedIn();
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
    localStorage.getItem('id_token');
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
