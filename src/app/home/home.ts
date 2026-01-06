import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {TopThemeSwitch} from '../ui/top-theme-switch/top-theme-switch';

@Component({
  selector: 'app-home',
  imports: [
    TopThemeSwitch,

  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
