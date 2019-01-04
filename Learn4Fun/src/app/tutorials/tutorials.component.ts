import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { TutorialsService } from './service/tutorials.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
  providers:[TutorialsService]
})
export class TutorialsComponent implements OnInit {
  tutorials : Tutorial[];
  //javaTutorial = new Tutorial('Java Beginner', 'Learn Java from scratch!', 15, 2, ['Java', 'OOP']);

  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor(private tutorialService: TutorialsService) {    
  }

  ngOnInit() {
    this.tutorials = this.tutorialService.getTutorials();
  }

  increaseLikes(tutorial: Tutorial) {
    tutorial.likeCount++;
  }

  increaseDislikes(tutorial: Tutorial) {
    tutorial.dislikeCount++;
  }
}