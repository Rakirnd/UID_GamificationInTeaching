export class FreeAnswerQuestion {

  id: number;
  question: string;
  answer: string;

  constructor(question: string, answer: string, id?: number) {
    this.question = question;
    this.answer = answer;
    this.id = id;
  }

}

export class MultipleChoiceQuestion {

  id: number;
  question: string;
  choices: string[];
  answer: string;

  constructor(question: string, choices: string[], answer: string, id?: number) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
    this.id = id;
  }

}

export class FillBlanksQuestion {

  id: number;
  question: string[];
  answer: string[];

  constructor(question: string[], answer: string[], id?: number) {
    this.question = question;
    this.answer = answer;
    this.id = id;
  }

}
