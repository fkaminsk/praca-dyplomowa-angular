import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AppSettings} from '../../enums/AppSettings';
import * as moment from 'moment';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(login: string, password: string) {
    return this.http.post<any>(AppSettings.BACKEND_SERVER_URL + '/authenticate', {login, password})
      .subscribe(response => {
        this.setSession(response);
      });
  }

  private setSession(authResult) {
    const expiresAt = moment(authResult.expiresAt).toISOString();
    console.log(expiresAt);
    localStorage.setItem('id_token', authResult.jwt);
    localStorage.setItem('expires_at', expiresAt);
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
    }
    else {
      return next.handle(req);
    }
  }
}
