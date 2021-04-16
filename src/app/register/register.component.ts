import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user.model';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('f') registerForm: NgForm;
  constructor(private api: ApiService) {
  }

  onRegister() {
    const value = this.registerForm.value;
    const user = new User(value.login, value.password, value.email);
    this.api.registerUser(user).subscribe(response => {
      console.log('registered user ' + response.login);
    });
  }
}
