import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomColorHover]',
})
export class RandomColorHoverDirective {
  @Input() hoverin !: string;
  @Input() hoverout !: string;
  
  constructor(private elRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.elRef.nativeElement.style.color = this.hoverin;
    this.elRef.nativeElement.style.fontWeight = 700;
  }

  @HostListener('mouseout') onMouseour() {
    this.elRef.nativeElement.style.color = this.hoverout;
    this.elRef.nativeElement.style.fontWeight = 400;
  }
}
