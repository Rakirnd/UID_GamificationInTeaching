import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FunFact } from '../../funfact/funfact.component';
import { Tutorial } from '../../models/tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

    tutorials = [];
    auxTutorials = [];
    sessionTutorial;
    
    constructor() {
       this.tutorials = JSON.parse(localStorage.getItem("tutorials"));
        console.log("Constructor: ", this.tutorials);
        if(this.tutorials == undefined || this.tutorials == [] || this.tutorials.length == 0)
        {
          console.log("empty");
          this.auxTutorials = [
            new Tutorial(
                'Angular Tutorial',
                'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.',
                0,
                0,                
                ['Angular', 'JS', 'technology'],
                'DEVELOP ACROSS ALL PLATFORMS',
                "https://www.youtube.com/embed/d9SWNLZvA8g",
                []                
            )
        ];
        localStorage.setItem("tutorials", JSON.stringify(this.auxTutorials));
        }        
    }

    getTutorials()
    {
        this.tutorials = JSON.parse(localStorage.getItem("tutorials"));
        console.log("Get tutorials: ", this.tutorials);
        return this.tutorials;
    }

    getSessionTutorial() {
        this.sessionTutorial = JSON.parse(localStorage.getItem("sessionTutorial"));
        return this.sessionTutorial;
    }

    setSessionTutorial(tutorial: Tutorial) {
        this.sessionTutorial = tutorial;
        localStorage.setItem("sessionTutorial", JSON.stringify(this.sessionTutorial));
    }

    clearSessionTutorial() {
        this.sessionTutorial = null;
        localStorage.removeItem("sessionTutorial");
    }

    addTutorial(tutorial: Tutorial) {
      this.tutorials = JSON.parse(localStorage.getItem("tutorials"));
      this.tutorials.push(tutorial);
      localStorage.setItem("tutorials", JSON.stringify(this.tutorials));
    }
}
