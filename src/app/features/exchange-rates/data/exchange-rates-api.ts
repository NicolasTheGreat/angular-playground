import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ExchangeRate } from './exchange-rate.model';

const MOCK_RATES: ExchangeRate[] = [
  { currency: 'USD', buy: 3.98, sell: 4.06 },
  { currency: 'EUR', buy: 4.27, sell: 4.35 },
  { currency: 'GBP', buy: 4.98, sell: 5.08 },
  { currency: 'CHF', buy: 4.52, sell: 4.61 },
];

const SIMULATED_LATENCY_MS = 400;

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesApi {
  getRates(): Observable<ExchangeRate[]> {
    return of(MOCK_RATES).pipe(delay(SIMULATED_LATENCY_MS));
  }
}
