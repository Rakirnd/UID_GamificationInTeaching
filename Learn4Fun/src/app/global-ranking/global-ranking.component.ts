import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-ranking',
  templateUrl: './global-ranking.component.html',
  styleUrls: ['./global-ranking.component.scss']
})
export class GlobalRankingComponent implements OnInit {

  loggedUser = new User('John Doe', 8, 15872, ['Java Master', 'Hardware Hero']);
  andreea = new User('Andreea', 1, 25287, ['Design Patterns Juggler', 'OOP MVP']);
  andrei = new User('Andrei', 2, 25002, ['OOP MVP', 'Math Geek']);

  constructor() {
  }

  ngOnInit() {
  }

}

export class User {
  name: string;
  position: number;
  totalScore: number;
  rewards: string[];

  constructor(name: string, position: number, totalScore: number, rewards: string[]) {
    this.name = name;
    this.position = position;
    this.totalScore = totalScore;
    this.rewards = rewards;
  }

}
