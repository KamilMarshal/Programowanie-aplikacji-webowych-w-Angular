import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ThemeService} from '../../services/theme';
import {SettingsService} from '../../services/settings-service';
import {FormsModule} from '@angular/forms';
import {supabase} from '../../lib/supabase';

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

  async logout() {
    const { error } = await supabase.auth.signOut()
    await this.router.navigate(['/login']);
  }
}
