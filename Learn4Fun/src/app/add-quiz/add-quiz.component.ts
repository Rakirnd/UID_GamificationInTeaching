import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuizzesService } from '../quizzes/quizzes.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { Quiz } from '../quizzes/quizzes.component';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss'],
  providers:[QuizzesService]
})
export class AddQuizComponent implements OnInit {

    addQuizForm: FormGroup;

    submitted: boolean = false;
    success: boolean = false;

    messageForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private quizService: QuizzesService, private router: Router) {

    }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required]
        });

        this.addQuizForm = this.formBuilder.group({
            title: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9 ]+$')])],
            shortDescription: ['', Validators.required],
            description: ['', Validators.compose([Validators.required, Validators.maxLength(800)])],            
            tags: ['']
        });
    }

    onSubmit() {
        this.submitted = true;
        this.success = false;
        if (this.addQuizForm.invalid) {
            return;
        }

        this.success = true;
        this.submitted = false;
        console.log("here");
        this.quizService.addQuiz(new Quiz(
            this.addQuizForm.controls.title.value,
            this.addQuizForm.controls.description.value,
            0,
            0,
            this.addQuizForm.controls.tags.value.split(' '),
            this.addQuizForm.controls.shortDescription.value
        ));
        this.router.navigate(['quizzes']);
    }

}
