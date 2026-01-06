import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Question, QuestionResult} from '../../models/question';
import {ProgressBar} from '../progress-bar/progress-bar';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, ProgressBar],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class QuestionComponent {
  @Input() question!: Question;
  @Input() last = false;
  @Input() test: boolean = false;
  @Input() catalogue: boolean = false;
  @Input() number: number = 0;
  @Input() QuestionsNumber: number = 0;
  @Input() readonly = false; // tryb podsumowania
  @Input() initialSelected: string[] | null = null; //zaznaczone odp


  @Output() answered = new EventEmitter<QuestionResult>();
  @Output() next = new EventEmitter<void>();

  @ViewChild('timer') timer!: ProgressBar;

  checked = false;
  isCorrect = false;
  selected: string[] = [];
  restoredTimeMs = 0;

  ngOnInit() {
    // console.log("question:", this.question)
    // console.log("initialSelected:", this.initialSelected)


    if (this.initialSelected) {
      this.selected = [...this.initialSelected];
      this.checked = true;
      this.isCorrect = this.allCorrect();
    }

    if (this.readonly) {
      this.timer?.pause();
    }
  }


  toggleAnswer(key: string) {
    if (this.checked || this.readonly) return;

    this.selected = this.selected.includes(key)
      ? this.selected.filter(k => k !== key)
      : [...this.selected, key];
  }

  sendToTestService(): void {
    this.isCorrect = this.allCorrect();
    this.answered.emit({
      question: this.question,
      selected: [...this.selected],
      isCorrect: this.isCorrect
    });
  }

  checkAnswer() {
    this.isCorrect = this.allCorrect();
    this.checked = true;
    this.timer?.pause();
  }

  goNext() {
    this.sendToTestService();
    this.selected = [];
    this.checked = false;
    this.next.emit();
  }


  finishTest() {
    this.isCorrect = this.allCorrect();
    this.timer.pause();
    this.sendToTestService();
    this.next.emit();
  }

  protected allCorrect(): boolean {
    const correctKeys = Object.keys(this.question.correct)
      .filter(k => this.question.correct[k] === 1);

    return (
      this.selected.length === correctKeys.length &&
      this.selected.every(s => correctKeys.includes(s))
    );
  }

  answerClass(key: string): string {
    if (!this.checked) {
      return this.selected.includes(key) ? 'selected' : '';
    }

    const isCorrect = this.question.correct[key] === 1;
    const isSelected = this.selected.includes(key);

    if (isCorrect && isSelected) return 'correct';
    if (!isCorrect && isSelected) return 'wrong';
    if (isCorrect && !isSelected) return 'missed';

    return 'none';
  }

  saveProgress(elapsedMs: number): void {
    // np. debounce i zapis do backendu
    // this.api.saveTime(this.currentQuestionId, elapsedMs);
  }

  resetQuestion(): void {
    this.selected = [];
    this.checked = false;
    this.isCorrect = false;
  }
}
