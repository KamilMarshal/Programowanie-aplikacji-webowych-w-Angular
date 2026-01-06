import {Component, HostListener, OnInit} from '@angular/core';
import {Question, QuestionMockup} from '../models/question';
import {QuestionComponent} from '../components/question/question';
import {TopThemeSwitch} from '../ui/top-theme-switch/top-theme-switch';
import {SettingsService} from '../services/settings-service';

interface Rule {
  id: string;
  name: string;
}

@Component({
  selector: 'app-catalogue',
  imports: [
    QuestionComponent,
    TopThemeSwitch
  ],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})

export class Catalogue implements OnInit {
  rules: Rule[] = [
    {id: '0', name: 'Wszystkie przepisy'},
    {id: '1', name: 'BOISKO DO GRY'},
    {id: '2', name: 'CZAS GRY, SYGNAŁ KOŃCOWY, ZATRZYMANIE CZASU GRY'},
    {id: '3', name: 'PIŁKA'},
    {id: '4', name: 'DRUŻYNA, ZMIANY, WYPOSAŻENIE, KONTUZJE ZAWODNIKA'},
    {id: '5', name: 'BRAMKARZ'},
    {id: '6', name: 'POLE BRAMKOWE'},
    {id: '7', name: 'GRA PIŁKĄ, GRA PASYWNA'},
    {id: '8', name: 'FAULE I NIESPORTOWE ZACHOWANIE'},
    {id: '9', name: 'ZDOBYCIE BRAMKI'},
    {id: '10', name: 'RZUT ROZPOCZYNAJĄCY GRĘ'},
    {id: '11', name: 'RZUT Z LINII BOCZNEJ'},
    {id: '12', name: 'RZUT OD BRAMKI'},
    {id: '13', name: 'RZUT WOLNY'},
    {id: '14', name: 'RZUT KARNY'},
    {id: '15', name: 'OGÓLNE ZASADY WYKONYWANIA RZUTÓW'},
    {id: '16', name: 'KARY'},
    {id: '17', name: 'SĘDZIOWIE'},
    {id: '18', name: 'MIERZĄCY CZAS I SEKRETARZ'},
    {id: 'RSZ', name: 'REGULAMIN STREFY ZMIAN'}
  ];

  constructor(private settingsService: SettingsService) {}

  config = true;
  selectedRule: Rule | null = null;
  questionsCount = 0;
  loadedCount = this.questionsCount;

  ngOnInit() {
    this.settingsService.questionsCount$.subscribe(count => {
      this.questionsCount = count;
      this.loadedCount = count;
    });
  }

  get questionsToDisplay() {
    return QuestionMockup.slice(0, this.loadedCount);
  }

  get ruleName(): string {
    return this.selectedRule?.name ?? '';
  }

  selectRule(rule: Rule) {
    this.selectedRule = rule;
    this.config = false;
    this.loadedCount = this.questionsCount;
  }

  loadMore() {
    this.loadedCount = Math.min(
      this.loadedCount + this.questionsCount,
      QuestionMockup.length
    );
  }

  get canLoadMore(): boolean {
    return this.loadedCount < QuestionMockup.length;
  }
}
