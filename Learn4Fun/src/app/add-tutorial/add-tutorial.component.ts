import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { TutorialsService } from '../tutorials/service/tutorials.service';
import { Tutorial } from '../models/tutorial';


@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss'],
  providers:[TutorialsService]
})
export class AddTutorialComponent implements OnInit {

    addTutorialForm: FormGroup;

    submitted: boolean = false;
    success: boolean = false;

    messageForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private tutorialService: TutorialsService, private router: Router) {

    }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required]
        });

        this.addTutorialForm = this.formBuilder.group({
            title: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9 ]+$')])],
            shortDescription: ['', Validators.required],
            description: ['', Validators.compose([Validators.required, Validators.maxLength(800)])],
            videoURL: ['', Validators.pattern('^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$')],
            tags: ['']
        });
    }

    onSubmit() {
        this.submitted = true;
        this.success = false;
        if (this.addTutorialForm.invalid) {
            return;
        }

        this.success = true;
        this.submitted = false;
        console.log("here");
        this.tutorialService.addTutorial(new Tutorial(
            this.addTutorialForm.controls.title.value,
            this.addTutorialForm.controls.description.value,
            0,
            0,
            this.addTutorialForm.controls.tags.value.split(' '),
            this.addTutorialForm.controls.shortDescription.value,            
            this.addTutorialForm.controls.videoURL.value.replace('watch?v=', 'embed/'),
            []
        ));
        this.router.navigate(['tutorials']);
    }
}