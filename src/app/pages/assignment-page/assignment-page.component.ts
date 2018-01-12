import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-page',
  templateUrl: './assignment-page.component.html',
  styleUrls: ['./assignment-page.component.scss']
})
export class AssignmentPageComponent {

  public randomNumbers: Array<number> = Array.apply(null, { length: 100 }).map(Function.call, Math.random);

}
