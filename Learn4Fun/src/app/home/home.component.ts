import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // images
  redPandaImage = 'url(../../assets/images/red-panda.jpg)';
  fireFoxFunFact = 'url(../../assets/images/FirefoxFunFact02.JPG)';
  answerImage = 'url(../../assets/images/answer04.jpg)';
  joinCommunityImage = 'url(../../assets/images/community02.png)';
  tutorialImage = 'url(../../assets/images/learning01.jpg)';
  achievementImage = 'url(../../assets/images/achievement01.jpg)';
  feedbackImage = 'url(../../assets/images/feedback02.jpg)';
  testKnowledgeImage = 'url(../../assets/images/testKnowledge01.png)';
  helpImage = 'url(../../assets/images/help02.jpg)';

  // relative left percentages
  splitLeft = '25%';

  // messages
  joinCommunityMessage1 = 'First Time Visiting Learn4Fun?';
  joinCommunityMessage2 = 'Join Our Community Today!';

  answerMessage1 = 'Got A Question?';
  answerMessage2 = 'Someone Definitely Has The Answer!';
  answerMessage3 = 'So... Ask Away!';

  learningMessage1 = 'Do You Wish To Learn Something New?';
  learningMessage2 = 'Visit Our Tutorials Page!';

  achievementMessage1 = 'Are You An Achievement Hunter?';
  achievementMessage2 = 'Check Out All The Badges You Can Earn!';

  feedbackMessage = 'Don`t Forget To Leave Your Feedback!';

  testKnowledgeMessage = 'Think You Know Everything?';

  helpMessage = 'Do You Wish To Aid The Community?';

  funFactMessage1 = 'Did You Know?';
  funFactMessage2 = 'The English word for red panda is “Firefox” which is where the browser gets its name from – ';
  funFactMessage3 = 'this means the Firefox logo is actually a red panda, not a fox!';
  // button messages


  constructor() {
  }

  ngOnInit() {
  }

}
