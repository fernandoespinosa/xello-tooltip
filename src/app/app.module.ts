import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TooltipManagerDirective } from './directives/tooltip-manager.directive';
import { ManagedTooltipButtonComponent } from './managed-tooltip-button/managed-tooltip-button.component';
import { AssignmentPageComponent } from './assignment-page/assignment-page.component';

const appRoutes: Routes = [
  { path: 'assignment', component: AssignmentPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TooltipManagerDirective,
    ManagedTooltipButtonComponent,
    AssignmentPageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
