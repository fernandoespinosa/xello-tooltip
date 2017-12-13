import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[tooltipManager][ngbTooltip]'
})
export class TooltipManagerDirective {

  private _tooltipId: string;

  constructor(private _element: ElementRef, private _tooltip: NgbTooltip) {
    this._tooltipId = (_tooltip as any)._ngbTooltipWindowId;
  }

  @HostListener('document:click', ['$event'])
  private documentClick(event: MouseEvent): void {
    console.log('documentClick @:', this._tooltipId);
    
    if (this._tooltip && this._tooltip.isOpen()) {
      console.log('tooltip is open:', this._tooltip);

      if (this._element.nativeElement.contains(event.target)) {
        console.log('clicked inside:', this._element);
      } else {

      }
    }
  }

}
