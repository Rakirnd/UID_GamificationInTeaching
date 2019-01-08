import { Injectable } from '@angular/core';
import { QA } from "../qa.component";
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions =[];

  constructor() { 
    this.questions = JSON.parse(localStorage.getItem("questions"));

    if(this.questions == undefined || this.questions == [] || this.questions.length == 0)
        {
          this.questions = [
            new QA('Java:Array Index out of bound', 'Put link to Answer here', 20 , 3, ['Java', 'Arrays']), 
            new QA('JS:Button does not trigger action', 'Put link to Answer here', 15, 4, ['JavaScript', 'HTML'])
        ];
        localStorage.setItem("questions", JSON.stringify(this.questions));
        }        
    }

  getQuestions() {
      this.questions = JSON.parse(localStorage.getItem("questions"));

      return this.questions;
  }

  addQuestion(question: QA) {
    this.questions = JSON.parse(localStorage.getItem("questions"));
    this.questions.push(question);
    localStorage.setItem("questions", JSON.stringify(this.questions));
  }


}
