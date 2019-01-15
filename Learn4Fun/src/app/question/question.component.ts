import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {Quiz} from '../models/Quiz';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  quiz: Quiz;

  numberOfQuestions: number;
  questionNumber: string;
  description = '';
  submitted = false;
  success = false;
  selectedQuestion = 'FREE ANSWER';
  public questionTypes: Array<string> = ['FREE ANSWER', 'MULTIPLE CHOICE', 'FILL IN THE BLANKS'];

  isMultipleChoice: boolean;
  isFreeAnswer: boolean;
  isFillBlanks: boolean;

  constructor(public sanitizer: DomSanitizer, public route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.numberOfQuestions = 1;
    this.questionNumber = '1';
    this.isFreeAnswer = true;
    this.isMultipleChoice = false;
    this.isFillBlanks = false;
  }

  ngOnInit() {
    this.questionNumber = JSON.parse(localStorage.getItem('currentQuestion'));
  }

  onSubmit() {

  }

  addNextQuestion() {
    let x = JSON.parse(localStorage.getItem('currentQuestion'));

    localStorage.setItem('currentQuestion', JSON.stringify(+x + 1));
    this.questionNumber = JSON.stringify(+x + 1);
    this.description = '';
    this.numberOfQuestions++;

  }

  previousQuestion() {
    let x = JSON.parse(localStorage.getItem('currentQuestion'));

    if (x > 1) {
      localStorage.setItem('currentQuestion', JSON.stringify(+x - 1));
      this.questionNumber = JSON.stringify(+x - 1);
      this.description = '';
    }

  }

  nextQuestion() {
    let x = JSON.parse(localStorage.getItem('currentQuestion'));

    if (x < this.numberOfQuestions) {
      localStorage.setItem('currentQuestion', JSON.stringify(+x + 1));
      this.questionNumber = JSON.stringify(+x + 1);
      this.description = '';
    }

  }

  changeQuestionTypes(s: any) {
    console.log(this.selectedQuestion);

    if (this.selectedQuestion === 'FILL IN THE BLANKS') {
      this.isFillBlanks = true;
      this.isFreeAnswer = false;
      this.isMultipleChoice = false;
    } else if (this.selectedQuestion === 'MULTIPLE CHOICE') {
      this.isFillBlanks = false;
      this.isFreeAnswer = false;
      this.isMultipleChoice = true;
    } else if (this.selectedQuestion === 'FREE ANSWER') {
      this.isFillBlanks = false;
      this.isFreeAnswer = true;
      this.isMultipleChoice = false;
    }
  }
}
