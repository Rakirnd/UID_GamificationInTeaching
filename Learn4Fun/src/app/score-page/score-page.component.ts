import { Component, OnInit } from '@angular/core';
import {Quiz} from '../models/Quiz';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss']
})
export class ScorePageComponent implements OnInit {

  quiz: Quiz;

  constructor() { }

  ngOnInit() {
    this.quiz = JSON.parse(localStorage.getItem('currentQuiz'));
  }

}
