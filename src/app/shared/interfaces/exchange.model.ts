export interface PaymentCurrency {
  fromCurrency: string;
  toCurrency: string;
  exchangeRate: number;
}
export interface ExchangeRate {
  sourceCurrency: string;
  paymentCurrencies: PaymentCurrency[];
}
