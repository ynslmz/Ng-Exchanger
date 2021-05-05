import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCurrency, VoyageDetail } from 'src/app/shared/interfaces/cost.model';
import { ExchangeRate } from 'src/app/shared/interfaces/exchange.model';

@Component({
  selector: 'mcr-cost-list',
  templateUrl: './cost-list.component.html',
  styleUrls: ['./cost-list.component.scss']
})
export class CostListComponent implements OnInit {

  voyageDetail!: VoyageDetail;
  exchangeRate!: ExchangeRate;
  toCurrency!: BaseCurrency;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.voyageDetail = data.voyageDetails;
      this.exchangeRate = data.exchangeRates;
    });
  }

  changeCalculationRate(currency: BaseCurrency): void {
    this.toCurrency = currency;
  }

}
