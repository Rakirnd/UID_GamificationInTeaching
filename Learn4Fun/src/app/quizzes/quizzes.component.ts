import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {

  // quizzes
  javaMasterQuiz = new Quiz('Java Master', 'Prove you are a Java Master!', 100, 0, ['Java', 'OOP', 'Design Patterns']);
  cSharpGuruQuiz = new Quiz('C# Guru', 'Show the world you have a sharp mind!', 100, 0, ['C#', 'Web', '.Net']);

  // images
  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor() {
  }

  ngOnInit() {
  }

  increaseLikes(quiz: Quiz) {
    quiz.likeCount++;
  }

  increaseDislikes(quiz: Quiz) {
    quiz.dislikeCount++;
  }

}

export class Quiz {

  title: string;
  description: string;
  likeCount: number;
  dislikeCount: number;
  tags: string[];

  constructor(title: string, description: string, likeCount: number, dislikeCount: number, tags: string[]) {
    this.title = title;
    this.description = description;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.tags = tags;
  }

}