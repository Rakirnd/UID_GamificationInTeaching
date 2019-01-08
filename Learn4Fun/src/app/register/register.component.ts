import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDT} from '../models/UserDT';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errMessage = 'Registration Successful!';
  registrationForm: FormGroup;

  submitted = false;
  success = true;

  regUsername: string;
  regPass: string;
  regConfirmPass: string;
  registration: UserDT = new UserDT();

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });

  }

  register() {

    this.submitted = true;

    if (this.registrationForm.invalid) {

      this.success = false;
      this.errMessage = 'Please enter your username, password and confirm your password!';

    } else {

      this.regUsername = this.registrationForm.controls.username.value;
      this.regPass = this.registrationForm.controls.password.value;
      this.regConfirmPass = this.registrationForm.controls.confirmPassword.value;

      if (this.regConfirmPass === this.regPass) {

        this.registration.username = this.regUsername;
        this.registration.password = this.regPass;

        if (this.registration.username.length < 3) {
          this.success = false;
          this.errMessage = 'Username must have a minimum length of 3 characters!';
        } else if (this.registration.password.length < 5) {
          this.success = false;
          this.errMessage = 'Password must have a minimum length of 5 characters!';
        } else {
          this.success = true;
          this.errMessage = 'Registration successful!';
        }

      } else {

        this.success = false;
        this.errMessage = 'Passwords must be matching!';

      }


    }

  }

}
