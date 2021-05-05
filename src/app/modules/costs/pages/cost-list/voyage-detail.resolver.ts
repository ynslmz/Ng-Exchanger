import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { VoyageDetail } from 'src/app/shared/interfaces/cost.model';
import { CostService } from '../../cost.service';

@Injectable({
  providedIn: 'root'
})
export class VoyageDetailResolver implements Resolve<VoyageDetail> {
  constructor(private costService: CostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VoyageDetail> {
    return this.costService.getCostList();
  }
}
