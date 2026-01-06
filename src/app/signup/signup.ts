import { Component } from '@angular/core';
import {SignInForm} from "../components/sign-in-form/sign-in-form";
import {TopThemeSwitch} from "../ui/top-theme-switch/top-theme-switch";
import {SignUpForm} from '../components/sign-up-form/sign-up-form';

@Component({
  selector: 'app-signup',
  imports: [
    TopThemeSwitch,
    SignUpForm
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

}
