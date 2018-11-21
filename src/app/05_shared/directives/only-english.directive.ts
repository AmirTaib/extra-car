import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnlyEnglish]'
})
export class OnlyEnglishDirective {

  @HostBinding('class.notValid')
  private isNotValidKey = false;
  constructor() { }


  @HostListener('keypress', ['$event'])
  IsEnglish(event: KeyboardEvent) {
    console.log(2222);
    if (event.keyCode < 65 || event.keyCode > 122) {
      this.isNotValidKey = true;
      event.preventDefault();
      setTimeout(() => { this.isNotValidKey = false; }, 500);
    }
  }



}
