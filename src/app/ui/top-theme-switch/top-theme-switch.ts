import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from '../../services/theme';
import {SettingsService} from '../../services/settings-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-top-theme-switch',
  imports: [
    FormsModule
  ],
  templateUrl: './top-theme-switch.html',
  styleUrl: './top-theme-switch.css',
})
export class TopThemeSwitch implements OnInit {
  @Input() protected: boolean = false;

  showSettings = false;
  questionsCount = 3;

  ngOnInit() {
    this.questionsCount = this.settingsService.questionsCount;
  }

  constructor(
    protected themeService: ThemeService,
    // private authService: AuthService,
    private settingsService: SettingsService,
    private router: Router
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
  }

  saveSettings(value: number) {
    this.settingsService.setQuestionsCount(value);
    this.showSettings = false;
  }

  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
}
