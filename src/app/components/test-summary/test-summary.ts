import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TestService } from '../../services/test-service';
import {QuestionComponent} from '../question/question';
import {TestAnswer} from '../../models/test-result';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-test-summary',
  templateUrl: './test-summary.html',
  styleUrl: './test-summary.css',
  imports: [
    QuestionComponent,
    DatePipe
  ]
})
export class TestSummary implements OnInit {
  @Input() timeSpent?: number;
  @Input() isExam = false;

  @Output() retry = new EventEmitter<void>();

  answers: TestAnswer[] = [];

  correct = 0;
  total = 0;
  percent = 0;
  passed = false;
  date!: Date;

  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.answers = this.testService.getAnswers();
    this.correct = this.testService.getScore();
    this.total = this.testService.getTotal();

    this.percent = Math.round((this.correct / this.total) * 100);
    this.passed = this.percent >= 70;
    this.date = new Date();
  }

  get minutes(): number {
    return this.timeSpent ? Math.floor(this.timeSpent / 60) : 0;
  }

  get seconds(): number {
    return this.timeSpent ? this.timeSpent % 60 : 0;
  }
}
