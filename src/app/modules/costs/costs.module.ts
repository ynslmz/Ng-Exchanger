import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { CostListComponent } from './cost-list/cost-list.component';
import { CostService } from './cost.service';
import { CostItemComponent } from './cost-item/cost-item.component';
import { CostGroupComponent } from './cost-group/cost-group.component';
import { CurrencyDropdownComponent } from './currency-dropdown/currency-dropdown.component';
import { CostPriceTextComponent } from './cost-price-text/cost-price-text.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CostPriceInputComponent } from './cost-price-input/cost-price-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CostListComponent,
    CostItemComponent,
    CostGroupComponent,
    CurrencyDropdownComponent,
    CostPriceTextComponent,
    CostPriceInputComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    CostsRoutingModule,
    FormsModule
  ],
  providers: [
    CostService
  ]
})
export class CostsModule { }
