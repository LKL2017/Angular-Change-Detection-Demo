import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildBRoutingModule } from './child-b-routing.module';
import { ChildBComponent } from './child-b.component';


@NgModule({
  declarations: [ChildBComponent],
  imports: [
    CommonModule,
    ChildBRoutingModule
  ]
})
export class ChildBModule { }
