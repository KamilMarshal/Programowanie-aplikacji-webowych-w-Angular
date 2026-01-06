import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly STORAGE_KEY = 'questionsCount';

  private questionsCountSubject = new BehaviorSubject<number>(
    this.loadInitialValue()
  );

  questionsCount$ = this.questionsCountSubject.asObservable();

  get questionsCount(): number {
    return this.questionsCountSubject.value;
  }

  setQuestionsCount(value: number): void {
    const parsed = Number(value);
    this.questionsCountSubject.next(parsed);
    localStorage.setItem(this.STORAGE_KEY, parsed.toString());
  }

  private loadInitialValue(): number {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    return saved ? Number(saved) : 5;
  }
}
