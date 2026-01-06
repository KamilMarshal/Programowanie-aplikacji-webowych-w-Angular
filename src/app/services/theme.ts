import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.classList.toggle('dark', this.isDark);
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }
  }

  getTheme() {
    return this.isDark ? 'dark' : 'light';
  }
}
