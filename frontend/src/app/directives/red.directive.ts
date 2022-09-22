import { Directive, ElementRef } from '@angular/core';
import { reduce } from 'rxjs';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
   }

}
