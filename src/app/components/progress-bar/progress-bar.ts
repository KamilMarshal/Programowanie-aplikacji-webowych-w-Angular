import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges, ViewChild
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  imports: [
    NgClass
  ],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar
  implements OnInit, OnDestroy, OnChanges {

  @Input() duration = 30;          // sekundy
  @Input() questionId!: number;    // zmiana = reset
  @Input() startFrom?: number;     // ms z backendu (opcjonalnie)

  @Output() finished = new EventEmitter<void>();
  @Output() tick = new EventEmitter<number>(); // do synchronizacji

  progress = 100;
  secondsLeft = 0;

  private sub?: Subscription;
  private elapsedMs = 0;
  private readonly stepMs = 100;

  ngOnInit(): void {
    this.reset();
    this.start();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questionId'] && !changes['questionId'].firstChange) {
      this.reset();
      this.start();
    }
  }

  ngOnDestroy(): void {
    this.clear();
  }

  /* Sterowanie */


  pause(): void {
    this.clear();
  }

  resume(): void {
    if (!this.sub) {
      this.start();
    }
  }

  reset(): void {
    this.clear();
    this.elapsedMs = this.startFrom ?? 0;
    this.updateView();
  }

  /* Logika timera */

  private start(): void {
    const totalMs = this.duration * 1000;

    this.sub = interval(this.stepMs).subscribe(() => {
      this.elapsedMs += this.stepMs;

      if (this.elapsedMs >= totalMs) {
        this.elapsedMs = totalMs;
        this.updateView();
        this.finished.emit();
        this.clear();
        return;
      }

      this.updateView();
      this.tick.emit(this.elapsedMs); // sync do backendu
    });
  }

  private clear(): void {
    this.sub?.unsubscribe();
    this.sub = undefined;
  }

  private updateView(): void {
    const totalMs = this.duration * 1000;
    const remainingMs = totalMs - this.elapsedMs;

    this.progress = (remainingMs / totalMs) * 100;
    this.secondsLeft = Math.ceil(remainingMs / 1000);
  }

  getColor(): string {
    if (this.progress < 25) return '#EF5350';
    if (this.progress < 50) return '#FFA726';
    return '#66BB6A';
  }

  color = this.getColor()
}
