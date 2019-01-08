import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.scss']
})
export class QaComponent implements OnInit {

  javaArrays = new QA('Java:Array Index out of bound', 'Put link to Answer here', 20, 3, ['Java', 'Arrays']);
  javaScriptBtn = new QA('JS:Button does not trigger action', 'Put link to Answer here', 15, 4, ['JavaScript', 'HTML']);

  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor(private router: Router) {
  }

  ngOnInit() {
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
  linkToAnswer: string;
  likeCount: number;
  dislikeCount: number;
  tags: string[];

  constructor(title: string, linkToAnswer: string, likeCount: number, dislikeCount: number, tags: string[]) {
    this.title = title;
    this.linkToAnswer = linkToAnswer;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.tags = tags;
  }

}
