import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

    constructor(public sanitizer: DomSanitizer, public formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.messageForm = this.formBuilder.group({
            message: ['', Validators.required]
        });

        //fun facts
        this.funFacts = [
            new FunFact(
                this.messageForm,
                'Intel Processors',
                'over 1 billion transistors',
                'There are close to 1 billion transistors inside a 2nd Generation Intel Core processor. If a car were to have 1 billion parts - compared to the 30.000 they currently have - it would take the most productive car manufacturer 114 years to assemble this car. If a processor were a country and its transistor count was a country\'s population, a 2nd Generation Intel Core processor would be the third most populated country in the world (995 million+) just behind China and India.',
                ['../../assets/images/funfact/intel-cpu1.jpg', '../../assets/images/funfact/intel-cpu2.jpg'],
                ['CPU', 'intel', 'technology', 'processor'],
                "https://www.youtube.com/embed/d9SWNLZvA8g",
                [new Comment('Jon', 'Interesting! Would like to know more about this.', [new Comment('Julia', 'You can check CS108 lectures for further information.', [])])]
            ),

            new FunFact(
                this.messageForm,
                'AI - the lifesaver',
                'ML Saves Lives! Computer-ided Detection (CAD) software can spot 52% of breast cancer cells, a year before patients are diagnosed.',
                'Computer-aided detection (CADe) and diagnosis (CAD) has been a rapidly growing, active area of research in medical imaging. Machine learning (ML) plays an essential role in CAD, because objects such as lesions and organs may not be represented accurately by a simple equation; thus, medical pattern recognition essentially requires learning from examples. One of the most popular uses of ML is the classification of objects such as lesion candidates into certain classes (e.g., abnormal or normal, and lesions or non-lesions) based on input features (e.g., contrast and area) obtained from segmented lesion candidates.',
                ['../../assets/images/funfact/ai1.jpeg', '../../assets/images/funfact/ai2.png'],
                ['AI', 'machine-learning', 'lifesaver', 'CAD'],
                "https://www.youtube.com/embed/Nj2YSLPn6OY",
                [new Comment('Adam', 'Nice post. Thanks for sharing!', []), new Comment('George', 'Amazing. I learnt something new today.', [])]
            )
        ];
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
