import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [NgClass],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})
export class PasswordStrengthComponent {
  password: string = '';
  strength: string | null = null;

  checkStrength(event: Event): void {
  const input = event.target as HTMLInputElement;
  const password = input.value;
  this.password = password;

  if (password.length < 8) {
    this.strength = 'too-short';
  } else if (/^[a-zA-Z]+$/.test(password) || /^[0-9]+$/.test(password) || /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
    this.strength = 'easy';
  } else if (/^[a-zA-Z0-9]+$/.test(password) || /^[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password) || /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password)) {
    this.strength = 'medium';
  } else if (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password)) {
    this.strength = 'strong';
  }
}
}
