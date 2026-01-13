import { Routes } from '@angular/router';
import {App} from './app';
import {authGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    pathMatch: 'full',
    loadComponent: () => {
      return import('./home/home').then((m) => m.Home);
    }
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => {
      return import('./profile/profile').then((m) => m.Profile);
    }
  },
  {
    path: 'signup',
    loadComponent: () => {
      return import('./signup/signup').then((m) => m.Signup);
    }
  },
  {
    path: 'login',
    loadComponent: () => {
      return import('./login/login').then((m) => m.Login);
    }
  },
  {
    path: 'test',
    canActivate: [authGuard],
    loadComponent: () => {
      return import('./test/test').then((m) => m.Test);
    }
  },
  {
    path: 'exam',
    canActivate: [authGuard],
    loadComponent: () => {
      return import('./exam/exam').then((m) => m.Exam);
    }
  },
  {
    path: 'catalogue',
    canActivate: [authGuard],
    loadComponent: () => {
      return import('./catalogue/catalogue').then((m) => m.Catalogue);
    }
  },
  {
    path: 'random-question',
    canActivate: [authGuard],
    loadComponent: () => {
      return import('./random-question/random-question').then((m) => m.RandomQuestion);
    }
  },
];
