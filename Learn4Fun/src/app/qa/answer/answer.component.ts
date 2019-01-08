import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  answers: Answer[];
  addAnswerForm: FormGroup;

  likeImage = 'url(../../assets/images/like02.png)';
  dislikeImage = 'url(../../assets/images/dislike.png)';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.addAnswerForm = this.formBuilder.group({
      description: ['']
    });
    this.answers = [new Answer('Another option would be...', 2, 3)];
  }


  onSubmit() {

    console.log(this.addAnswerForm.controls.description.value);

    this.answers.push(new Answer(this.addAnswerForm.controls.description.value, 0, 0));
    this.addAnswerForm.controls.description.setValue('');
  }

  increaseLikes(answer: Answer) {
    answer.likeCount++;
  }

  increaseDislikes(answer: Answer) {
    answer.dislikeCount++;
  }

}

export class Answer {

  description: string;
  likeCount: number;
  dislikeCount: number;


  constructor(description: string, likeCount: number, dislikeCount: number) {
    this.description = description;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
  }

}
