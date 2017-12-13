import { Directive, ElementRef, HostListener, ComponentRef } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Directive({
  selector: '[tooltipManager][ngbTooltip]'
})
export class TooltipManagerDirective {
  private tooltipId: string;

  constructor(private element: ElementRef, private tooltip: NgbTooltip) {
    this.tooltipId = (tooltip as any)._ngbTooltipWindowId;
  }

  @HostListener('document:click', ['$event'])
  private documentClick(event: MouseEvent): void {
    console.log('documentClick @:', this.tooltipId);
    
    if (this.tooltip && this.tooltip.isOpen()) {
      console.log('tooltip is open:', this.tooltip);

      if (this.element.nativeElement.contains(event.target)) {
        console.log('clicked inside:', this.element);
      } else {
        const tooltipWindowRef: ComponentRef<NgbTooltip> = (this.tooltip as any)._windowRef;
        if (tooltipWindowRef.location.nativeElement.contains(event.target)) {
          console.log('clicked inside:', tooltipWindowRef);
        } else {
          console.log('clicked outside:', tooltipWindowRef);
          this.tooltip.close();
        }
      }
    }
  }

}
