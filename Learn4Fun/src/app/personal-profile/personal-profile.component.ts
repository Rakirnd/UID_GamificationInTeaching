import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  johnny = new PersonalProfile('John Doe', 'University College Cork', 'Computer Science',
  'Student',20,15872,8);

  constructor() { }

  ngOnInit() {
  }

}

export class PersonalProfile{
  name: string
  university: string;
  specialization: string;
  ocupation: string;
  age: number;
  score: number;
  ranking: number;

  constructor(name:string, university: string, specialization:string, 
    ocupation: string, age:number, score: number, ranking:number){
      this.name = name;
      this.university = university;
      this.specialization = specialization;
      this.ocupation = ocupation;
      this.age = age;
      this.score = score;
      this.ranking = ranking;
    }

}
