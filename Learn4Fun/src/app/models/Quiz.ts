import {FillBlanksQuestion, FreeAnswerQuestion, MultipleChoiceQuestion} from './Question';

export class Quiz {

  title: string;
  shortDescription: string;
  description: string;
  likeCount: number;
  dislikeCount: number;
  tags: string[];

  freeAnswerQuestions: FreeAnswerQuestion[];
  multipleChoiceQuestions: MultipleChoiceQuestion[];
  fillBlanksQuestions: FillBlanksQuestion[];

  constructor(title: string, description: string, likeCount: number, dislikeCount: number, tags: string[], shortDescription: string) {
    this.title = title;
    this.description = description;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.tags = tags;
    this.shortDescription = shortDescription;
    this.freeAnswerQuestions = [];
    this.multipleChoiceQuestions = [];
    this.fillBlanksQuestions = [];
  }

  addFreeAnswerQuestion(q: FreeAnswerQuestion) {
    this.freeAnswerQuestions.push(q);
  }

  addMultipleChoiceQuestion(q: MultipleChoiceQuestion) {
    this.multipleChoiceQuestions.push(q);
  }

  addFillBlanksQuestion(q: FillBlanksQuestion) {
    this.fillBlanksQuestions.push(q);
  }

}
