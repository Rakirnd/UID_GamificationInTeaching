import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  johnny = new EditProfile('John Doe', '', '', '', new Date('20/12/1996'), '', '');

  constructor() {
  }

  ngOnInit() {
  }

}

export class EditProfile {
  name: string;
  university: string;
  specialization: string;
  ocupation: string;
  dob: Date;
  password: string;
  confirmPassword: string;

  constructor(name: string, university: string, specialization: string,
              ocupation: string, dob: Date, password: string, confirmPassword: string) {
    this.name = name;
    this.university = university;
    this.specialization = specialization;
    this.ocupation = ocupation;
    this.dob = dob;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

}
