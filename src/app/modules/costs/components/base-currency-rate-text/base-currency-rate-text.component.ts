import { Component, Input, OnInit } from '@angular/core';
import { BaseCurrency, DaCurrency } from 'src/app/shared/interfaces/cost.model';

@Component({
  selector: 'mcr-base-currency-rate-text',
  templateUrl: './base-currency-rate-text.component.html',
  styleUrls: ['./base-currency-rate-text.component.scss']
})
export class BaseCurrencyRateTextComponent implements OnInit {

  @Input() baseCurrency!: BaseCurrency;
  @Input() daCurrency!: DaCurrency;
  constructor() { }

  ngOnInit(): void {
  }

}
