import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunfactDataService } from '../funfact/funfact-data.service';

@Component({
  selector: 'app-funfact',
  templateUrl: './funfact.component.html',
  styleUrls: ['./funfact.component.scss']
})
export class FunfactComponent implements OnInit {
    messageForm: FormGroup;
    funFacts = [];

    likeImage = 'url(../../assets/images/like02.png)';
    dislikeImage = 'url(../../assets/images/dislike.png)';

    constructor(public sanitizer: DomSanitizer, public formBuilder: FormBuilder, private funfactData: FunfactDataService) {
        //fun facts
        this.funFacts = this.funfactData.getFunFacts();
    }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required]
        });
    } 
}

export class FunFact {
    title: string;
    description: string;
    content: string;
    imagePath: string[];
    tags: string[];
    videoURL: string;
    comments: Comment[];
    likes: number;
    dislikes: number;

    messageForm: FormGroup;
    submittedComment: boolean = false;
    successComment: boolean = false;

    constructor(messageForm : FormGroup, title: string, description: string, content: string, imagePath: string[], tags: string[], videoURL: string, comments: Comment[]) {
        this.title = title;
        this.description = description;
        this.content = content;
        this.imagePath = imagePath;
        this.tags = tags;
        this.videoURL = videoURL;
        this.comments = comments;
        this.likes = 0;
        this.dislikes = 0;
        this.messageForm = messageForm;
    }

    onSubmit() {
        this.submittedComment = true;
        this.successComment = false;
        if (this.messageForm.invalid) {
            return;
        }

        this.comments.push(new Comment("User", this.messageForm.controls.message.value, []));
        this.messageForm.controls.message.setValue('');

        this.successComment = true;
        this.submittedComment = false;
    }

    enterPressed(event) {
        if (event.keyCode == 13) {
            this.onSubmit();
        }
    }

    increaseLikes() {
        this.likes++;
    }

    increaseDislikes() {
        this.dislikes++;
    }
}

export class Comment {
    username: string;
    comment: string;
    replies: Comment[];

    constructor(username: string, comment: string, replies: Comment[]) {
        this.username = username;
        this.comment = comment;
        this.replies = replies;
    }
}
