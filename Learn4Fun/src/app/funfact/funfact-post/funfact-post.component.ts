import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FunfactDataService } from '../funfact-data.service'
import { FunFact } from '../funfact.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-funfact-post',
  templateUrl: './funfact-post.component.html',
  styleUrls: ['./funfact-post.component.scss', './../funfact.component.scss']
})
export class FunfactPostComponent implements OnInit {

    funfactForm: FormGroup;

    submitted: boolean = false;
    success: boolean = false;

    messageForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private funfactDataService: FunfactDataService, private router: Router) {

    }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required]
        });

        this.funfactForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            content: ['', Validators.required],
            videoURL: [''],
            tags: ['']
        });
    }

    onSubmit() {
        this.submitted = true;
        this.success = false;
        if (this.funfactForm.invalid) {
            return;
        }

        this.success = true;
        this.submitted = false;

        this.funfactDataService.addFunFact(new FunFact(
            this.messageForm,
            this.funfactForm.controls.title.value,
            this.funfactForm.controls.description.value,
            this.funfactForm.controls.content.value,
            ['../../assets/images/funfact/intel-cpu1.jpg', '../../assets/images/funfact/intel-cpu2.jpg'],
            this.funfactForm.controls.tags.value.split(' '),
            this.funfactForm.controls.videoURL.value.replace('watch?v=', 'embed/'),
            []
        ));
        this.router.navigate(['funfact']);
    }
}
