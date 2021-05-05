import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ExchangeRate } from 'src/app/shared/interfaces/exchange.model';
import { ExchangeService } from '../exchange.service';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesResolver implements Resolve<ExchangeRate> {
  constructor(private exchangeService: ExchangeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ExchangeRate> {
    return this.exchangeService.getExchangeRatesList();
  }
}
