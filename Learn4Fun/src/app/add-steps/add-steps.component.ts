import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StepService } from './service/step.service';
import { Validators } from '@angular/forms';
import { Step } from '../models/step';
import { TutorialsService } from '../tutorials/service/tutorials.service';


@Component({
    selector: 'app-add-steps',
    templateUrl: './add-steps.component.html',
    styleUrls: ['./add-steps.component.scss']
})
export class AddStepsComponent implements OnInit {

    addStepForm: FormGroup;

    submitted: boolean = false;
    success: boolean = false;

    messageForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private stepService: StepService, private router: Router, private tutorialsService:TutorialsService) { }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required]
        });
        this.addStepForm = this.formBuilder.group({
            title: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9 ]+$')])],
            shortDescription: ['', Validators.required]
        });       
    }

    redirectToAddAnotherStep() {
        console.log("aici");
        this.submitted = true;
        this.success = false;

        if (this.addStepForm.invalid) {
            return;
        }

        this.success = true;
        this.submitted = false;

        this.stepService.addStep(new Step(
            this.addStepForm.controls.title.value,
            this.addStepForm.controls.shortDescription.value
        ));
        
        this.addStepForm.controls.title.setValue("");
        this.addStepForm.controls.shortDescription.setValue("");
        
        this.router.navigate(['addSteps']);
    }

    onSubmit() {
        var tutorial = this.tutorialsService.getSessionTutorial();
        tutorial.steps = this.stepService.getSteps();
        console.log("tutorial", tutorial);
        this.tutorialsService.setSessionTutorial(tutorial);
        this.stepService.resetSteps();
        this.router.navigate(['addTutorial']);
    }

}
