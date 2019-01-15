import {Component, OnInit} from '@angular/core';
import {QuizzesService} from './service/quizzes.service';
import {Quiz} from '../models/Quiz';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  quizzes: Quiz[];

  // images
  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor(private quizzesService: QuizzesService, private router: Router) {
    this.quizzes = quizzesService.getQuizzes();
  }

  ngOnInit() {
  }

  increaseLikes(quiz: Quiz) {
    quiz.likeCount++;
  }

  increaseDislikes(quiz: Quiz) {
    quiz.dislikeCount++;
  }

  viewQuiz(quiz: Quiz) {
    localStorage.setItem('currentQuiz', JSON.stringify(quiz));
    this.router.navigate(['viewQuiz']);
  }

}
