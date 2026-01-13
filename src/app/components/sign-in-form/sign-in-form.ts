import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in-form.html',
  styleUrl: './sign-in-form.css',
})
export class SignInForm {
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
      const {error} = await this.auth.signInAnonymously();

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

  goToSignUp() {
    this.navigate('/signup');
  }

  goToHome() {
    this.navigate('/');
  }

  async oAuthSign(type: any) {
    this.login()
  }

}
