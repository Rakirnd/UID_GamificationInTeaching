import { Injectable } from '@angular/core';
import { Step } from 'src/app/models/step';

@Injectable({
    providedIn: 'root'
})
export class StepService {

    steps = [];

    constructor() { 
        this.steps = JSON.parse(localStorage.getItem("steps"));
        if (this.steps == undefined || this.steps == [] || this.steps.length ==0) {
            var auxSteps = [ new Step(
                    'STEP_AUX',
                    'The first step is to try'
                )
            ];
            localStorage.setItem("steps", JSON.stringify(auxSteps));
        }
    }

    getSteps() {
        this.steps = JSON.parse(localStorage.getItem("steps"));
        console.log("Get steps: ", this.steps);
        return this.steps;
    }

    addStep(step: Step) {
        this.steps = JSON.parse(localStorage.getItem("steps"));
        this.steps.push(step);
        localStorage.setItem("steps", JSON.stringify(this.steps));
    }

    resetSteps() {
        this.steps = [];
        localStorage.setItem("steps", JSON.stringify(this.steps));
    }

}
