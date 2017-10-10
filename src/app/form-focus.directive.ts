import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[formFocus]'
})
export class FormFocusDirective {
  @Output() formFocus = new EventEmitter<any>();

  public labelState: boolean;
  constructor() { this.labelState = true; }

  @HostListener('focus') onFocus(): void {
    this.hideOrShowlabel(false);
  }

  @HostListener('blur') onBlur(): void {
    this.hideOrShowlabel(true);
  }

  // hide error dialog on focus of input
  public hideOrShowlabel(isHidden: boolean): void {
    this.labelState = isHidden;
    this.formFocus.emit(this.labelState);
  }

}
