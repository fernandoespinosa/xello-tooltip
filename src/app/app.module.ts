import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { TooltipManagerDirective } from './directives/tooltip-manager.directive';
import { ManagedTooltipButtonComponent } from './managed-tooltip-button/managed-tooltip-button.component';


@NgModule({
  declarations: [
    AppComponent,
    TooltipManagerDirective,
    ManagedTooltipButtonComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
