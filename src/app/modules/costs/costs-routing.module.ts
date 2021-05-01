import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostListComponent } from './cost-list/cost-list.component';

const routes: Routes = [
  {
    path: '',
    component: CostListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostsRoutingModule { }
