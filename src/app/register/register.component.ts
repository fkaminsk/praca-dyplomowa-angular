import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user.model';
import {BackendApiService} from '../services/backend-api.service';
import {ValidationResultModel} from '../../models/validationResult.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private api: BackendApiService) {
  }

  validationResult: ValidationResultModel;

  onRegister(form: NgForm) {
    const value = form.value;
    const user = new User(value.login, value.password, value.email);
    this.api.registerUser(user).subscribe(response => {
      this.validationResult = response;
    });
  }
}
