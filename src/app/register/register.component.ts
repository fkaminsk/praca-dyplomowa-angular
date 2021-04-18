import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../models/user.model';
import {ApiService} from '../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('f') registerForm: NgForm;
  isProcessing = false;

  constructor(private api: ApiService, private router: Router) {
  }


  onRegister() {
    this.isProcessing = true;
    const value = this.registerForm.value;
    const user = new User(value.login, value.password, value.email);
    this.api.registerUser(user).subscribe(response => {
      setTimeout(() => {
        this.isProcessing = false;
        this.router.navigateByUrl('/');
      }, 5000);
    });
  }
}
