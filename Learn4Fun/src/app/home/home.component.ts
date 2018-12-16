import {Component, OnInit, ViewChild} from '@angular/core';
import {IImage} from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('slideshow') slideshow: any;

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

  // main page slides
  welcomeSlide = new HomePageSlideShowComponent(
    '../../assets/images/Welcome01.jpg',
    'Learn4Fun',
    [''],
    'Join Us!',
    [0, 0, 0, 0],
    [],
    [38, 80, 62, 20]);
  funFactSlide = new HomePageSlideShowComponent(
    '../../assets/images/FirefoxFunFact02.JPG',
    this.funFactMessage1,
    [this.funFactMessage2, this.funFactMessage3],
    'Learn More!',
    [0, 0, 0, 0],
    [0, 15, 0, 85, 0, 30, 0, 60],
    [38, 80, 62, 20]);
  feedbackSlide = new HomePageSlideShowComponent(
    '../../assets/images/feedback02.jpg',
    'Something Amiss?',
    ['Make Sure You Tell Us!'],
    'Over Here!',
    [0, 0, 0, 0],
    [0, 15, 0, 85],
    [38, 80, 62, 20]);

  // slides wrapper
  slides = [this.welcomeSlide, this.funFactSlide, this.feedbackSlide];

  // slide show urls
  images: (string | IImage)[] = [
    this.welcomeSlide.imageUrl,
    this.funFactSlide.imageUrl,
    this.feedbackSlide.imageUrl
  ];


  constructor() {
  }

  ngOnInit() {
  }

}

export class HomePageSlideShowComponent {

  imageUrl: string;

  imageTitle: string;
  titleRelativePercentages: number[]; // left-top-right-bottom

  imageContent: string[];
  contentRelativePercentages: number[]; // left-top-right-bottom

  buttonText: string;
  buttonRelativePercentages: number[];

  constructor(url: string,
              title: string,
              content: string[],
              bText: string,
              titleRelativePercentages: number[],
              contentRelativePercentages: number[],
              buttonRelativePercentages: number[]) {

    this.imageUrl = url;
    this.imageTitle = title;
    this.imageContent = content;
    this.buttonText = bText;
    this.titleRelativePercentages = titleRelativePercentages;
    this.contentRelativePercentages = contentRelativePercentages;
    this.buttonRelativePercentages = buttonRelativePercentages;

  }

}
