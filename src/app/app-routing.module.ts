import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTypesComponent } from './components/child-types/child-types.component';
import { ContainerTypesComponent } from './components/container-types/container-types.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { HigherOrderFnComponent } from './components/higher-order-fn/higher-order-fn.component';
import { InputOuputComponent } from './components/input-ouput/input-ouput.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'child-types', component: ChildTypesComponent },
  { path: 'input-output', component: InputOuputComponent },
  { path: 'container-types', component: ContainerTypesComponent },
  { path: 'higher-order-fn', component: HigherOrderFnComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
