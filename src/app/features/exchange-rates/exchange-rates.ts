import { Component, inject, OnInit, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ExchangeRatesApi } from './data/exchange-rates-api';
import { ExchangeRate } from './data/exchange-rate.model';

@Component({
  selector: 'app-exchange-rates',
  imports: [DecimalPipe],
  templateUrl: './exchange-rates.html',
  styleUrl: './exchange-rates.scss',
})
export class ExchangeRates implements OnInit {
  private readonly exchangeRatesApi = inject(ExchangeRatesApi);

  protected readonly rates = signal<ExchangeRate[]>([]);
  protected readonly loading = signal(true);

  ngOnInit(): void {
    this.exchangeRatesApi.getRates().subscribe((rates) => {
      this.rates.set(rates);
      this.loading.set(false);
    });
  }
}
