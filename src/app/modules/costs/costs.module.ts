import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { CostListComponent } from './cost-list/cost-list.component';
import { CostService } from './cost.service';


@NgModule({
  declarations: [
    CostListComponent
  ],
  imports: [
    CommonModule,
    CostsRoutingModule
  ],
  providers: [
    CostService
  ]
})
export class CostsModule { }
