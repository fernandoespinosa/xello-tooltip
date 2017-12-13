import { Directive, ElementRef } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip';

@Directive({
  selector: '[tooltipManager][ngbTooltip]'
})
export class TooltipManagerDirective {

  constructor(private element: ElementRef, private tooltip: NgbTooltip) {
    console.log(element);
    console.log(tooltip);
  }

}
