import {Component} from '@angular/core';
import {QuestionComponent} from '../components/question/question';
import {Question, QuestionMockup, QuestionResult} from '../models/question';
import {TestSummary} from '../components/test-summary/test-summary';
import {TopThemeSwitch} from '../ui/top-theme-switch/top-theme-switch';
import {FormsModule} from '@angular/forms';
import {TestService} from '../services/test-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exam',
  imports: [
    FormsModule,
    QuestionComponent,
    TestSummary,
    TopThemeSwitch
  ],
  templateUrl: './exam.html',
  styleUrl: './exam.css',
})
export class Exam {
  constructor(private testService: TestService, private router: Router) {
  }

  questions: Question[] = QuestionMockup;
  config: boolean = true;
  currentIndex = 0;
  questionsNumber: number = 30;
  isAlertOpen = false;
  level: string | null = null;
  showSummary = false;

  private elapsedMs = 0;
  startTime = 0;
  running = false;

  onStartAlert(level: string) {
    this.level = level;
    this.isAlertOpen = true;
  }

  closeAlert() {
    this.isAlertOpen = false;
  }

  onStartButton() {
    console.log('Rozpoczynam egzamin dla poziomu', this.level);
    this.isAlertOpen = false;
    this.testService.reset();
    this.config = false;
    this.currentIndex = 0;
    this.showSummary = false;
    this.resetExamTimer();
    this.startExamTimer()
  }


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
      this.stopExamTimer()
      this.showSummary = true;
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  startExamTimer() {
    if (!this.running) {
      this.startTime = Date.now();
      this.running = true;
    }
  }

  stopExamTimer() {
    if (this.running) {
      this.elapsedMs += Date.now() - this.startTime;
      this.running = false;
    }
  }

  resetExamTimer() {
    this.elapsedMs = 0;
    this.running = false;
    this.startTime = 0;
  }

  getElapsedSeconds() {
    if (this.running) {
      return this.elapsedMs + (Date.now() - this.startTime);
    }
    return Math.floor(this.elapsedMs / 1000);
  }


}
