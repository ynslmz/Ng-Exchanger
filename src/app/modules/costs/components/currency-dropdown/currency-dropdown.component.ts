import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseCurrency } from 'src/app/shared/interfaces/cost.model';
import { PaymentCurrency } from 'src/app/shared/interfaces/exchange.model';

@Component({
  selector: 'mcr-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss']
})
export class CurrencyDropdownComponent implements OnInit {

  @Input() paymentCurrencies!: PaymentCurrency[];
  @Input() selected!: string;
  @Output() selectionChanged = new EventEmitter<BaseCurrency>();

  constructor() { }

  ngOnInit(): void {
    if (!!this.selected) {
      this.emitChange(this.selected);
    }
  }

  onSelectionChange(e: any): void {
    if (!!e.target.value) {
      this.emitChange(e.target.value);
    }
  }

  private emitChange(currency: any): void {
    const baseCurrency = this.paymentCurrencies.find(i => i.toCurrency === currency);
    if (!!baseCurrency) {
      this.selectionChanged.next({
        currency: baseCurrency?.toCurrency,
        exchangeRate: baseCurrency?.exchangeRate
      } as BaseCurrency);
    }
  }
}
