import {Role} from '../enums/Role';

export class User {

  constructor(login, password, email) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.role = Role.ROLE_REGULAR;
  }

  readonly userId: number;
  login: string;
  password: string;
  email: string;
  role: Role;

}
