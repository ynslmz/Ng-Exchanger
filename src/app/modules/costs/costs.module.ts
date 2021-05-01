import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { CostListComponent } from './cost-list/cost-list.component';


@NgModule({
  declarations: [
    CostListComponent
  ],
  imports: [
    CommonModule,
    CostsRoutingModule
  ]
})
export class CostsModule { }
