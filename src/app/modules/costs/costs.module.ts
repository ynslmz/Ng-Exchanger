import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostsRoutingModule } from './costs-routing.module';
import { CostListComponent } from './pages/cost-list/cost-list.component';
import { CostService } from './services/cost.service';
import { CostItemComponent } from './components/cost-item/cost-item.component';
import { CostGroupComponent } from './components/cost-group/cost-group.component';
import { CurrencyDropdownComponent } from './components/currency-dropdown/currency-dropdown.component';
import { CostPriceTextComponent } from './components/cost-price-text/cost-price-text.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CostPriceInputComponent } from './components/cost-price-input/cost-price-input.component';
import { FormsModule } from '@angular/forms';
import { BaseCurrencyRateTextComponent } from './components/base-currency-rate-text/base-currency-rate-text.component';
import { CostCommentsComponent } from './components/cost-comments/cost-comments.component';


@NgModule({
  declarations: [
    CostListComponent,
    CostItemComponent,
    CostGroupComponent,
    CurrencyDropdownComponent,
    CostPriceTextComponent,
    CostPriceInputComponent,
    BaseCurrencyRateTextComponent,
    CostCommentsComponent
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
