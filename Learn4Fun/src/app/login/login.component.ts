import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDT} from '../models/UserDT';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errMessage = 'Login successful! You will now be redirected!';
  loginForm: FormGroup;

  submitted = false;
  success = true;

  loginTry: UserDT = new UserDT();

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

  }

  login() {

    this.submitted = true;

    if (this.loginForm.invalid) {

      this.success = false;
      this.errMessage = 'Please enter your username and password!';

    } else {

      this.loginTry.username = this.loginForm.controls.username.value;
      this.loginTry.password = this.loginForm.controls.password.value;

      if (this.loginTry.username === 'admin' && this.loginTry.password === 'admin') {
        this.success = true;
        this.errMessage = 'Login successful! Hello Admin!';
      } else if (this.loginTry.username === 'user' && this.loginTry.password === 'user123') {
        this.success = true;
        this.errMessage = 'Login successful! Hello User!';
      } else {
        this.success = false;
        this.errMessage = 'Invalid username or password!';
      }

    }

  }

}
