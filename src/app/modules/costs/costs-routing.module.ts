import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostListComponent } from './cost-list/cost-list.component';
import { CostResolver } from './cost-list/cost.resolver';

const routes: Routes = [
  {
    path: '',
    component: CostListComponent,
    resolve: {
      voyageDetails: CostResolver,

    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostsRoutingModule { }
