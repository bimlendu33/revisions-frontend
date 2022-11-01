import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { RandomColorHoverDirective } from './directives/random-color-hover.directive';
import { IfAdminDirective } from './directives/if-admin.directive';
import { ChildTypesComponent } from './components/child-types/child-types.component';
import { InputOuputComponent } from './components/input-ouput/input-ouput.component';
import { InputOutputChildComponent } from './components/input-ouput/input-output-child/input-output-child.component';
import { ContainerTypesComponent } from './components/container-types/container-types.component';
import { ContainerTypeChildComponent } from './components/container-types/container-type-child/container-type-child.component';
import { HigherOrderFnComponent } from './components/higher-order-fn/higher-order-fn.component';

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
    ContainerTypesComponent,
    ContainerTypeChildComponent,
    HigherOrderFnComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
