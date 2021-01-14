import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildARoutingModule } from './child-a-routing.module';
import { ChildAComponent } from './child-a.component';


@NgModule({
  declarations: [ChildAComponent],
  imports: [
    CommonModule,
    ChildARoutingModule
  ]
})
export class ChildAModule { }
