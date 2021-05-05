import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { ExchangeRate } from 'src/app/shared/interfaces/exchange.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private apiService: ApiService) { }

  getExchangeRatesList(): Observable<ExchangeRate> {
    return this.apiService.get<ExchangeRate>('assets/data/exchange-rates.json');
  }
}
