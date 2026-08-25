import { Component } from '@angular/core';
import { CurrencyExchange } from '../currency-exchange/currency-exchange';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyExchange],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
