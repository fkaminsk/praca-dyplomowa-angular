import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AppSettings} from '../../enums/AppSettings';
import * as moment from 'moment';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private api: ApiService, private router: Router) {

  }

  // login and return true when success
  async login(login: string, password: string) {
    await this.http.post<any>(AppSettings.BACKEND_SERVER_URL + '/authenticate', {login, password})
      .toPromise().then(response => {
        this.setSession(response);
      }).catch((err) => console.log(err));
    return this.isLoggedIn();
  }

  // set token obtained from backend in browser local storage
  setSession(authResult) {
    localStorage.setItem('id_token', authResult.jwt);
    localStorage.setItem('expires_at', moment(authResult.expiresAt).toISOString());
  }

  async logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    await this.router.navigateByUrl('/login');
  }

  getLoggedUser() {
    return this.http.get<User>(AppSettings.BACKEND_SERVER_URL + '/user');
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
  // interceptor that adds authorization header to each request
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
