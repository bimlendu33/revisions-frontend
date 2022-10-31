import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { RandomColorHoverDirective } from './directives/random-color-hover.directive';
import { IfAdminDirective } from './directives/if-admin.directive';
import { ChildTypesComponent } from './components/child-types/child-types.component';
import { InputOuputComponent } from './components/input-ouput/input-ouput.component';
import { InputOutputChildComponent } from './components/input-ouput/input-output-child/input-output-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CustomDirectivesComponent,
    RandomColorHoverDirective,
    IfAdminDirective,
    ChildTypesComponent,
    InputOuputComponent,
    InputOutputChildComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
