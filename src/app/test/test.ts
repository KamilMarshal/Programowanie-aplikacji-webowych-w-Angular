import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionComponent} from '../components/question/question';
import {Question, QuestionResult, Pool, QuestionMockup} from '../models/question';
import {TestSummary} from '../components/test-summary/test-summary';
import {TopThemeSwitch} from '../ui/top-theme-switch/top-theme-switch';
import {FormsModule} from '@angular/forms';
import {TestService} from '../services/test-service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, QuestionComponent, TestSummary, TopThemeSwitch, FormsModule],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {
  constructor(private testService: TestService) {}

  questions: Question[] = QuestionMockup; // tu ładujesz z backendu

  config: boolean = true;

  currentIndex = 0;
  maxQuestions = 25;
  questionsNumber: number = 0;
  pool: string | null = null;

  answers: string[][] = [];
  correctCount = 0;
  showSummary = false;
  errorMessage = '';

  handleAnswered(result: QuestionResult) {

    console.log(result)
    this.testService.saveAnswer(
      result.question,
      result.selected,
      result.isCorrect
    );

    console.log(this.testService.getAnswers());
  }

  nextQuestion() {
    if (this.currentIndex < this.questionsNumber - 1) {
      this.currentIndex++;
    } else {
      this.showSummary = true;
    }
  }

  pools: Pool[] = [
    {label: "Szczebel Centralny", value: "1"},
    {label: "Szczebel Okręgowy", value: "2"},
    {label: "Przepisy 2, 8, 16", value: "3"},
    {label: "Przepisy 2, 4, 8, 14, 17, 18", value: "4"},
    {label: "Nowe pytania", value: "5"}
  ]

  startTest() {
    if (this.questionsNumber == 0 || this.pool == null) {
      this.errorMessage = 'Wybierz liczbę i pulę pytań!'
      return;
    }

    console.log('Start testu', this.questionsNumber, 'pytań');
    this.testService.reset();
    this.currentIndex = 0;
    this.showSummary = false;

    this.config = false;
  }

  availableNumbers(): number[] {
    return [5, 10, 15, 20, 25, 30].filter(n => n <= this.maxQuestions);
  }

  resetTest() {
    this.testService.reset();

    this.currentIndex = 0;
    this.questionsNumber = 0;
    this.pool = null;

    this.showSummary = false;
    this.config = true;
    this.errorMessage = '';
  }

}
