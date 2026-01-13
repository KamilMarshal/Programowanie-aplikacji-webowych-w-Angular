import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { QuestionComponent } from '../components/question/question';
import { TopThemeSwitch } from '../ui/top-theme-switch/top-theme-switch';
import { QuestionsService } from '../services/questions-service';
import { Question, QuestionMockup } from '../models/question';

@Component({
  selector: 'app-random-question',
  imports: [
    QuestionComponent,
    TopThemeSwitch
  ],
  templateUrl: './random-question.html',
  styleUrl: './random-question.css',
})
export class RandomQuestion implements OnInit {
  question: Question;
  loading = false;

  constructor(private questionsService: QuestionsService, private cdr: ChangeDetectorRef) {
    // inicjalne pytanie z mockupu
    const q_id = Math.floor(Math.random() * QuestionMockup.length);
    this.question = QuestionMockup[q_id];
  }

  ngOnInit() {
    this.loadRandomQuestion();
    this.cdr.markForCheck();

  }

  async loadRandomQuestion() {
    this.loading = true;
    try {
      const questions = await this.questionsService.randomQuestion();
      if (questions?.length) {
        this.question = questions[0];
      } else {
        this.setRandomMockupQuestion();
      }
    } catch (err) {
      console.error('Błąd pobierania losowego pytania', err);
      this.setRandomMockupQuestion();
    }
    this.loading = false;
    this.cdr.markForCheck();
  }

  async nextQuestion() {
    await this.loadRandomQuestion();
    this.cdr.markForCheck();
  }

  private setRandomMockupQuestion() {
    const q_id = Math.floor(Math.random() * QuestionMockup.length);
    this.question = QuestionMockup[q_id];
  }
}
