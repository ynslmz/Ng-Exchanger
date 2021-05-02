import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { VoyageCostDetails } from 'src/app/shared/interfaces/cost.model';
import { CostService } from '../cost.service';

@Injectable({
  providedIn: 'root'
})
export class CostResolver implements Resolve<VoyageCostDetails> {
  constructor(private costService: CostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VoyageCostDetails> {
    return this.costService.getCostList();
  }
}
