import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {

  javaTutorial = new Tutorial('Java Beginner', 'Learn Java from scratch!', 15, 2, ['Java', 'OOP']);

  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor() {
  }

  ngOnInit() {
  }

  increaseLikes(tutorial: Tutorial) {
    tutorial.likeCount++;
  }

  increaseDislikes(tutorial: Tutorial) {
    tutorial.dislikeCount++;
  }

}

export class Tutorial {

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
