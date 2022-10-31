import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTypesComponent } from './components/child-types/child-types.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { InputOuputComponent } from './components/input-ouput/input-ouput.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'child-types', component: ChildTypesComponent },
  { path: 'input-output', component: InputOuputComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
