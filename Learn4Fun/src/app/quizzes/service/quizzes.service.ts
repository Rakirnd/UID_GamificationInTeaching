import {Injectable} from '@angular/core';
import {Quiz} from '../../models/Quiz';
import {FillBlanksQuestion, FreeAnswerQuestion, MultipleChoiceQuestion} from '../../models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {
  quizzes = [];
  auxQuizzes = [];

  constructor() {
    this.quizzes = JSON.parse(localStorage.getItem('quizzes'));
    if (this.quizzes == undefined) {

      console.log('Hello there!');

      const javaQuiz = new Quiz('Java Master', 'Prove you are a Java Master!', 100, 0, ['Java', 'OOP', 'Design Patterns'], '');

      const javaQuestion1 = new FreeAnswerQuestion('Describe the Observer Design Pattern',
        'The Observer Design Pattern: We have something that is described as being Observable, ' +
        'then Observers subscribe to it so that they will be notified in realtime.', 1);
      const javaQuestion2 = new MultipleChoiceQuestion('Java is a (an):',
        ['Scripting Language', 'OOP Language', 'Procedural Language'], 'OOP Language', 2);
      const javaQuestion3 = new FillBlanksQuestion(['Java is a', 'that is'],
        ['programming language', 'concurrent', 'class-based', 'object-oriented'], 3);

      javaQuiz.addFreeAnswerQuestion(javaQuestion1);
      javaQuiz.addMultipleChoiceQuestion(javaQuestion2);
      javaQuiz.addFillBlanksQuestion(javaQuestion3);

      const cSharpQuiz = new Quiz('C# Guru', 'Show the world you have a sharp mind!', 100, 0, ['C#', 'Web', '.Net'], '');

      const cSharpQuestion1 = new FreeAnswerQuestion('Describe how to create a Web Service using C#',
        'You create a Web Service in C# by annotating a function with [WebService]', 1);
      const cSharpQuestion2 = new MultipleChoiceQuestion('C# is a (an):',
        ['Scripting Language', 'OOP Language', 'Procedural Language'], 'OOP Language', 2);

      cSharpQuiz.addFreeAnswerQuestion(cSharpQuestion1);
      cSharpQuiz.addMultipleChoiceQuestion(cSharpQuestion2);

      this.auxQuizzes = [javaQuiz, cSharpQuiz];

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

