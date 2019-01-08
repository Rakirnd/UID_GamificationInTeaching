import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  errMessage = 'Thank you for your feedback!';
  messageForm: FormGroup;
  submitted = false;
  success = true;

  constructor(private formBuilder: FormBuilder) {

    this.messageForm = formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(75)], Validators.maxLength(500)]
    });

  }

  ngOnInit() {
  }

  submitFeedback() {

    this.submitted = true;

    if (this.messageForm.invalid) {

      this.success = false;

      if (this.messageForm.controls.message.value.length === 0) {
        this.errMessage = 'Please leave a message before submitting your feedback!';
      } else if (this.messageForm.controls.message.value.length < 75) {
        this.errMessage = 'You need to enter a minimum of 75 characters!';
      } else if (this.messageForm.controls.message.value.length > 500) {
        this.errMessage = 'Please do not exceed a maximum of 500 characters!';
      } else {
        this.success = true;
        this.errMessage = 'Thank you for your feedback!';
      }

    }

  }

}
