import { Component } from '@angular/core';
import {SignInForm} from '../components/sign-in-form/sign-in-form';
import {TopThemeSwitch} from '../ui/top-theme-switch/top-theme-switch';

@Component({
  selector: 'app-login',
  imports: [
    SignInForm,
    TopThemeSwitch
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
