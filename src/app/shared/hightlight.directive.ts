import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnChanges {

  @Input() appHightlight: number;


  constructor(public elementRef: ElementRef) {}

  ngOnChanges() {
    if (this.appHightlight >= 4.5) {
      this.elementRef.nativeElement.classList.add('blink');
    }
  }
}
