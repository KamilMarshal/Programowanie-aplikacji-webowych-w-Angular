import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ThemeService} from './services/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularFakultet');

  constructor(private theme: ThemeService, private router: Router) {}

  ngOnInit() {
    this.theme.initTheme();
  }

  toggleTheme() {
    this.theme.toggleTheme();
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
