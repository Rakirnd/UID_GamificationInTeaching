import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../service/question.service'
import { QA } from '../qa.component'

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
  providers: [QuestionService]
})
export class AskComponent implements OnInit {

  addQuestionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private router: Router) { 

  }

  ngOnInit() {
    this.addQuestionForm = this.formBuilder.group({
      title: [''],
      description: [''],
      tags: ['']
    });
  }

  onSubmit() {
    if (this.addQuestionForm.invalid) {
      return;
    }

    var question = new QA(
      this.addQuestionForm.controls.title.value,
      this.addQuestionForm.controls.description.value,
      0,
      0,
      this.addQuestionForm.controls.tags.value.split(' ')
    );

    this.questionService.addQuestion(question);
    this.router.navigate(['qa']);
  }

}
