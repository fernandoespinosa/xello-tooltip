import { Component, Input } from '@angular/core';

@Component({
  selector: 'managed-tooltip-button',
  templateUrl: './managed-tooltip-button.component.html',
  styleUrls: ['./managed-tooltip-button.component.scss']
})
export class ManagedTooltipButtonComponent {
  @Input() public name: string;
}
