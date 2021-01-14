import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShellComponent} from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shell',
    pathMatch: 'full'
  },
  {
    path: 'shell',
    loadChildren: () => import('./shell/shell.module').then(m => m.ShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
