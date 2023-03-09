import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  constructor(private ele: ElementRef) { 
    ele.nativeElement.style.color='red';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.color='green';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.color='blue';
  }

}
