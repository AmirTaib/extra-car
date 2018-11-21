import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  @HostBinding('class.notValid')
  private isNotValidKey = false;
  constructor() { }


  @HostListener('keypress', ['$event'])
  IsNumber(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode < 43 || event.keyCode > 58) {
      this.isNotValidKey = true;
      event.preventDefault();
      setTimeout(() => { this.isNotValidKey = false; }, 500);
    }
  }

}
