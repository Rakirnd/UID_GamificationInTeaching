import {Component, OnInit} from '@angular/core';
import {Quiz} from '../models/Quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;

  constructor() {
  }

  ngOnInit() {
    this.quiz = JSON.parse(localStorage.getItem('currentQuiz'));
  }

}
