import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Input } from '@angular/core';
import { Tutorial } from '../../models/tutorial';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TutorialsService } from '../service/tutorials.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers:[TutorialsService]
})
export class ViewComponent implements OnInit {
  @Input() id: string;
  tutorial: Tutorial;
  constructor(public sanitizer: DomSanitizer, public route: ActivatedRoute, private tutorialService: TutorialsService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.tutorial = this.tutorialService.getTutorialById(this.id);
    console.log(this.tutorial);
  }

}
