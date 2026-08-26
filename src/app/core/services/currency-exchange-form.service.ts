import { Injectable, effect, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, map, startWith, switchMap } from 'rxjs';
import { CurrencyExchangeStore } from '../currency-exchange.store';
import { ExchangeRatesApi } from '../../features/exchange-rates/data/exchange-rates-api';

export const CURRENCIES = ['PLN', 'USD', 'EUR', 'GBP', 'CHF'];

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly currencyExchangeStore = inject(CurrencyExchangeStore);
  private readonly exchangeRatesApi = inject(ExchangeRatesApi);

  readonly saveForm = new BehaviorSubject<boolean>(false);

  private previousSellCurrency = this.currencyExchangeStore.sellCurrency();

  constructor() {
    effect(() => {
      const sellCurrency = this.currencyExchangeStore.sellCurrency();

      if (sellCurrency !== this.previousSellCurrency) {
        this.currencyExchangeStore.setBuyCurrency('');
      }

      this.previousSellCurrency = sellCurrency;
    });
  }

  private readonly formGroup = this.formBuilder.group({
    buyCurrency: ['PLN', Validators.required],
    sellCurrency: ['EUR', Validators.required],
    buyAmount: [null as number | null, [Validators.required, Validators.min(0.01)]],
    sellAmount: [null as number | null, [Validators.required, Validators.min(0.01)]],
  });

  build() {
    return this.formGroup;
  }

  sellCurrencyChanges() {
    return this.formGroup.controls.sellCurrency.valueChanges.pipe(
      startWith(this.formGroup.controls.sellCurrency.value),
    );
  }

  buyAmountConverted() {
    return this.exchangeRatesApi.getRates().pipe(
      switchMap((rates) =>
        this.formGroup.controls.buyAmount.valueChanges.pipe(
          startWith(this.formGroup.controls.buyAmount.value),
          map((buyAmount) => {
            const { buyCurrency } = this.formGroup.value;
            const buyRate = rates.find((rate) => rate.currency === buyCurrency)?.buy ?? 1;

            return (buyAmount ?? 0) * buyRate;
          }),
        ),
      ),
    );
  }

  save(): void {
    this.saveForm.next(true);
  }
}
