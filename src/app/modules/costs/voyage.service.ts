import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { VoyageDetail } from 'src/app/shared/interfaces/cost.model';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private apiService: ApiService) { }

  getVoyageCostDetails(): Observable<VoyageDetail> {
    return this.apiService.get<VoyageDetail>('assets/data/costs.json');
  }
}
