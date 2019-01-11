import {Injectable} from '@angular/core';
import {Tutorial} from '../../models/tutorial';
import {UUID} from 'angular2-uuid';
import { Step } from '../../models/step';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  tutorials = [];
  auxTutorials = [];
  sessionTutorial;

  constructor() {
    this.tutorials = JSON.parse(localStorage.getItem('tutorials'));

    if (this.tutorials == undefined || this.tutorials == [] || this.tutorials.length === 0) {
      this.auxTutorials = [
        new Tutorial(
          'Angular Tutorial',
          'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',
          0,
          0,
          ['Angular', 'JS', 'technology'],
          'DEVELOP ACROSS ALL PLATFORMS',
          'https://www.youtube.com/embed/d9SWNLZvA8g',
          [new Step("Step1: Install the Angular CLI.", "To install the CLI using npm, open a terminal/console window and enter the following command: npm install -g @angular/cli"),
            new Step("Step 2: Create a workspace and initial application", "Run the CLI command ng new and provide the name my-app, as shown here: ng new my-app"),
           new Step("Step 3: Serve the application", "Launch the server by using the CLI command ng serve, with the --open option.") ],
          '1'
        )
      ];
      localStorage.setItem('tutorials', JSON.stringify(this.auxTutorials));
      console.log('I am building this shit!' + this.auxTutorials[0].title);
    }
  }

  getTutorials() {
    this.tutorials = JSON.parse(localStorage.getItem('tutorials'));

    return this.tutorials;
  }

  getTutorialById(id: string): Tutorial {
    this.tutorials = JSON.parse(localStorage.getItem('tutorials'));
    const tutorial = this.tutorials.filter(t => t.id === id);

    return tutorial[0];
  }

  getSessionTutorial() {
    this.sessionTutorial = JSON.parse(localStorage.getItem('sessionTutorial'));

    return this.sessionTutorial;
  }

  setSessionTutorial(tutorial: Tutorial) {
    this.sessionTutorial = tutorial;
    localStorage.setItem('sessionTutorial', JSON.stringify(this.sessionTutorial));
  }

  clearSessionTutorial() {
    this.sessionTutorial = null;
    localStorage.removeItem('sessionTutorial');
  }

  addTutorial(tutorial: Tutorial) {
    const uuid = UUID.UUID();
    tutorial.id = uuid;
    this.tutorials = JSON.parse(localStorage.getItem('tutorials'));
    this.tutorials.push(tutorial);
    localStorage.setItem('tutorials', JSON.stringify(this.tutorials));
  }
}
