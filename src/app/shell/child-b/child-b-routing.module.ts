import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChildBComponent} from './child-b.component';

const routes: Routes = [{
  path: '',
  component: ChildBComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildBRoutingModule { }
