import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

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

  constructor(private router: Router) {
  }

  submit() {
    this.errorMessage = '';
    this.loading = true;

    if (!this.email || !this.password) {
      this.errorMessage = 'Podaj email i hasło!';
      this.loading = false;
      return;
    }

    // frontend mock
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/']);
    }, 1000);
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

}
