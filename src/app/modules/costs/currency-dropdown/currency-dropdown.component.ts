import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseCurrency } from 'src/app/shared/interfaces/cost.model';
import { PaymentCurrency } from 'src/app/shared/interfaces/exchange.model';

@Component({
  selector: 'mcr-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss']
})
export class CurrencyDropdownComponent implements OnInit {

  @Input() paymentCurrencies!: PaymentCurrency[]
  @Input() selected!: string;
  @Output() onSelectionChanged = new EventEmitter<BaseCurrency>();

  constructor() { }

  ngOnInit(): void {
    this.selected!! && this.emitChange(this.selected);
  }

  onSelectionChange(e: any) {
    !!e.target.value && this.emitChange(e.target.value);
  }


  private emitChange(currency: any) {
    const baseCurrency = this.paymentCurrencies.find(i => i.toCurrency == currency);
    !!baseCurrency && this.onSelectionChanged.next(<BaseCurrency>{
      currency: baseCurrency?.toCurrency,
      exchangeRate: baseCurrency?.exchangeRate
    });
  }
}
