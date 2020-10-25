import {User} from './user.model';

export class ValidationResultModel {
  user: User;
  login: boolean;
  email: boolean;

  constructor(user: User, login: boolean, email: boolean) {
    this.user = user;
    this.login = login;
    this.email = email;
  }
}
