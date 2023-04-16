import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters: boolean = false;
  includeSymbols: boolean = false;
  includeNumbers: boolean = false;
  password: string = '';
  length: number = 0;

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeLength(value: string) {
    let len = parseInt(value);
    if (isNaN(len)) this.length = value.length;
    else this.length = len;
  }

  onButtonClick() {
    this.password = '';
    let charc = '';
    const numbers = '0123456789';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = ' ~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

    if (this.includeLetters) charc += letters;
    if (this.includeNumbers) charc += numbers;
    if (this.includeSymbols) charc += symbols;

    for (let i = 0; i < this.length; i++) {
      let index = Math.floor(Math.random() * charc.length);
      this.password += charc[index];
    }
  }
}
