import { Component, Input, OnInit } from '@angular/core';
import { BaseCurrency } from 'src/app/shared/interfaces/cost.model';

@Component({
  selector: 'mcr-cost-price-text',
  templateUrl: './cost-price-text.component.html',
  styleUrls: ['./cost-price-text.component.scss']
})
export class CostPriceTextComponent implements OnInit {

  @Input() amount!: number;
  @Input() toCurrency!: BaseCurrency;
  @Input() baseCurrency!: BaseCurrency;

  constructor() { }

  ngOnInit(): void {
  }

}
