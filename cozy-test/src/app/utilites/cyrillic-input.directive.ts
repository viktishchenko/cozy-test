import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCyrillicInput]',
})
export class CyrillicInputDirective {
  private regex = /^[а-яА-ЯёЁ\s]+$/;

  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;
    if (!this.regex.test(inputChar)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText && !this.regex.test(pastedText)) {
      event.preventDefault();
    }
  }
}
