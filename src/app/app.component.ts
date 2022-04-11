import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength: number = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  password: string = '';

  onButtonClick(){
    const numbers: string = '123456789';
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols: string = '!"#€%&/()';

    let combinedPassword: string = '';

    if (this.includeLetters || this.includeNumbers || this.includeSymbols && this.passwordLength > 0) {
      if (this.includeLetters)
        combinedPassword += letters;

      if (this.includeNumbers)
        combinedPassword += numbers;

      if (this.includeSymbols)
        combinedPassword += symbols;

      let generatedPassword: string = '';
      for (let i = 0; i < this.passwordLength; i++) {
        const index = Math.floor(Math.random() * combinedPassword.length);
        generatedPassword += combinedPassword[index];
      }
      this.password = generatedPassword;
    }
  }

}
