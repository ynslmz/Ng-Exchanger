import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostListComponent } from './pages/cost-list/cost-list.component';
import { ExchangeRatesResolver } from './pages/cost-list/exchange-rates.resolver';
import { VoyageDetailResolver } from './pages/cost-list/voyage-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: CostListComponent,
    resolve: {
      voyageDetails: VoyageDetailResolver,
      exchangeRates: ExchangeRatesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostsRoutingModule { }
