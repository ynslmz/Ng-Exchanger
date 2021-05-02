import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { VoyageCostDetails } from 'src/app/shared/interfaces/cost.model';

@Injectable({
  providedIn: 'root'
})
export class CostService {

  constructor(private apiService: ApiService) { }

  getCostList() {
    return this.apiService.get<VoyageCostDetails>('assets/data/costs.json');
  }
}
