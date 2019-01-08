import {Injectable} from '@angular/core';
import {Quiz} from '../../models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  quizzes = [];
  auxQuizzes = [];

  constructor() {
    this.quizzes = JSON.parse(localStorage.getItem('quizzes'));
    if (this.quizzes == undefined) {
      this.auxQuizzes = [
        new Quiz('Java Master', 'Prove you are a Java Master!', 100, 0, ['Java', 'OOP', 'Design Patterns'], ''),
        new Quiz('C# Guru', 'Show the world you have a sharp mind!', 100, 0, ['C#', 'Web', '.Net'], '')
      ];

      localStorage.setItem('quizzes', JSON.stringify(this.auxQuizzes));
    } else {
      localStorage.setItem('quizzes', JSON.stringify(this.quizzes));
    }
  }

  getQuizzes() {
    this.quizzes = JSON.parse(localStorage.getItem('quizzes'));
    return this.quizzes;
  }

  addQuiz(quiz: Quiz) {
    this.quizzes = JSON.parse(localStorage.getItem('quizzes'));
    this.quizzes.push(quiz);
    localStorage.setItem('quizzes', JSON.stringify(this.quizzes));
  }
}

