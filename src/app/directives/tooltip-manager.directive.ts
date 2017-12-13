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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode == 27) {
      this.tooltip.close();
    }
  }

  @HostListener('document:click', ['$event'])
  private documentClick(event: MouseEvent): void {

    if (this.tooltip.isOpen()) {
      const tooltipWindowRef: ComponentRef<NgbTooltip> = (this.tooltip as any)._windowRef;
      const clickedInsideTooltip: boolean = tooltipWindowRef.location.nativeElement.contains(event.target);
      if (!clickedInsideTooltip) {
        this.tooltip.close();
      }
    } else {
      const clickedInsideButton: boolean = this.element.nativeElement.contains(event.target);
      if (clickedInsideButton) {
        this.tooltip.open();
      }
    }
  }
}
