import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { TutorialsService } from './service/tutorials.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss'],
  providers:[TutorialsService]
})
export class TutorialsComponent implements OnInit {
  tutorials : Tutorial[];
  
  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor(private tutorialService: TutorialsService, private router: Router) {    
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

  viewTutorial(tutorial: Tutorial){
    console.log(tutorial);
    this.router.navigate(['tutorial-view', {id: tutorial.id}]);
  }
}