import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

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

  goToSignIn() {
    this.navigate('/login');
  }

  goToHome() {
    this.navigate('/');
  }

}
