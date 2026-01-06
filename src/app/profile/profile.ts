import { Component } from '@angular/core';
import {TopThemeSwitch} from '../ui/top-theme-switch/top-theme-switch';
import {DatePipe, KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  imports: [
    TopThemeSwitch,
    KeyValuePipe,
    DatePipe
  ]
})
export class Profile {
  userProfile = { //dane pobierane z bazy
    username: 'Użytkownik 1',
    avatar_url: 'https://placehold.co/200x200',
    role: 'Sędzia',
    level: 'Liga Centralna',
    createdAt: new Date("09/02/2025")
  };

  tab: 'user' | 'global' = 'user';

  stats = { // to tysz z bazy ziom
    user: {
      totalAnswers: 120,
      correctAnswers: 95,
      accuracy: 79,
      avgTestAccuracy: 82,
      totalTests: 12,
    },
    global: {
      totalAnswers: 5421,
      correctAnswers: 4023,
      accuracy: 74,
      rankedUsers: [
        { username: 'Użytkownik 2', avgAccuracy: 91 },
        { username: 'Użytkownik 3', avgAccuracy: 88 },
      ],
      monthlyActivity: {
        '2025-01': 120,
        '2025-02': 98,
      },
      poolsAccuracy: [
        { pool: 'Szczebel Centralny', avgAccuracy: 76 },
        { pool: 'Przepisy 2, 4, 8, 14, 17, 18', avgAccuracy: 69 },
      ],
    },
  };

  setTab(tab: 'user' | 'global') {
    this.tab = tab;
  }
}
