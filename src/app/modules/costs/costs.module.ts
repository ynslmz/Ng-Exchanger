import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { ListComponent } from './list/list.component';
import { CostListComponent } from './cost-list/cost-list.component';


@NgModule({
  declarations: [
    ListComponent,
    CostListComponent
  ],
  imports: [
    CommonModule,
    CostsRoutingModule
  ]
})
export class CostsModule { }
