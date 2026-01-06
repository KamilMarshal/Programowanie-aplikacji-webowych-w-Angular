import { Component } from '@angular/core';
import {QuestionComponent} from '../components/question/question';
import {TopThemeSwitch} from '../ui/top-theme-switch/top-theme-switch';
import {QuestionMockup} from '../models/question';

@Component({
  selector: 'app-random-question',
  imports: [
    QuestionComponent,
    TopThemeSwitch
  ],
  templateUrl: './random-question.html',
  styleUrl: './random-question.css',
})
export class RandomQuestion {
  q_id: number = Math.floor(Math.random()* 30 + 1);
  question = QuestionMockup[this.q_id]

  nextQuestion() {
    let old = this.q_id;
    do {
      this.q_id = Math.floor(Math.random()* 30 + 1);
    }
    while (this.q_id === old)
    this.question = QuestionMockup[this.q_id]
  }
}
