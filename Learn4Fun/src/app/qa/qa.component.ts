import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from './service/question.service'

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss'],
  providers: [QuestionService]
})
export class QaComponent implements OnInit {

  questions: QA[];

  javaArrays = new QA('Java:Array Index out of bound', 'Put link to Answer here', 20 , 3, ['Java', 'Arrays']);
  javaScriptBtn = new QA('JS:Button does not trigger action', 'Put link to Answer here', 15, 4, ['JavaScript', 'HTML']);

  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor(private router: Router, private questionsService: QuestionService) {
  }

  ngOnInit() {
    this.questions = this.questionsService.getQuestions();
  }

  increaseLikes(qa: QA) {
    qa.likeCount++;
  }

  increaseDislikes(qa: QA) {
    qa.dislikeCount++;
  }

  redirectToAnswer() {
    this.router.navigate(['answer']);
  }

}

export class QA {

  title: string;
  description: string;
  likeCount: number;
  dislikeCount: number;
  tags: string[];

  constructor(title: string, description, likeCount: number, dislikeCount: number, tags: string[]) {
    this.title = title;
    this.description = description;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.tags = tags;
  }

}