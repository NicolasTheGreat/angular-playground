import { Component } from '@angular/core';
import { CurrencyExchange } from '../currency-exchange/currency-exchange';
import { ExchangeRates } from '../exchange-rates/exchange-rates';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyExchange, ExchangeRates],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
