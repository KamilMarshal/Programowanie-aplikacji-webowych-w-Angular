import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(private router: Router, private auth: AuthService) {
  }

  async submit() {
    this.errorMessage = '';
    this.loading = true;

    if (!this.email || !this.password) {
      this.errorMessage = 'Podaj email i hasło!';
      this.loading = false;
      return;
    }

    await this.login()
  }

  async login() {
    this.loading = true;
    this.errorMessage = '';

    try {
      const { error } = await this.auth.signInAnonymously();

      if (error) {
        this.errorMessage = error.message;
        return;
      }

      await this.router.navigate(['/']);
    } finally {
      this.loading = false;
    }
  }

  private navigate(path: string) {
    this.router.navigate([path]);
  }
  goToForgotPassword() {
    this.navigate('/forgot-password');
  }

  goToSignIn() {
    this.navigate('/login');
  }

  goToHome() {
    this.navigate('/');
  }

}
