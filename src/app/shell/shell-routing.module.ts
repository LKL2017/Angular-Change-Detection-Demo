import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShellComponent} from './shell.component';
import {ChildAComponent} from './child-a/child-a.component';
import {ChildBComponent} from './child-b/child-b.component';

const routes: Routes = [{
  path: '',
  component: ShellComponent,
  children: [
    {
      path: 'child-a',
      loadChildren: () => import('./child-a/child-a.module').then(m => m.ChildAModule)
    },
    {
      path: 'child-b',
      loadChildren: () => import('./child-b/child-b.module').then(m => m.ChildBModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
