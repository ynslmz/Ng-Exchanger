import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseCurrency } from 'src/app/shared/interfaces/cost.model';

@Component({
  selector: 'mcr-cost-price-input',
  templateUrl: './cost-price-input.component.html',
  styleUrls: ['./cost-price-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CostPriceInputComponent),
      multi: true
    }
  ]
})

export class CostPriceInputComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() toCurrency!: BaseCurrency;
  @Input() baseCurrency!: BaseCurrency;

  @Input('value') inputValue!: number;

  get value(): any {
    return (this.inputValue * this.toCurrency.exchangeRate).toLocaleString('en-EN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  set value(val: any) {
    this.inputValue = Number(val.toString().replace(/,/g, '')) / this.toCurrency.exchangeRate;
    this.onChange(this.inputValue);
    this.onTouch();
  }

  onChange = (val: any) => { };
  onTouch = () => { };

  writeValue(obj: any): void {
    if (!!obj) {
      this.inputValue = Number(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
  }

  valChanged(e: any): void {
    this.value = e.target.value;
  }

}
