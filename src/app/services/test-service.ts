// services/test.service.ts
import { Injectable } from '@angular/core';
import { TestAnswer } from '../models/test-result';
import { Question } from '../models/question';

@Injectable({ providedIn: 'root' })
export class TestService {
  private answers: TestAnswer[] = [];

  reset() {
    this.answers = [];
  }

  saveAnswer(question: Question, selected: string[], isCorrect: boolean) {
    const correct = Object.keys(question.correct)
      .filter(k => question.correct[k] === 1);

    this.answers.push({
      question,
      selected: [...selected],
      isCorrect
    });
  }

  getAnswers(): TestAnswer[] {
    return this.answers;
  }

  getScore(): number {
    return this.answers.filter(a => a.isCorrect).length;
  }

  getTotal(): number {
    return this.answers.length;
  }
}
