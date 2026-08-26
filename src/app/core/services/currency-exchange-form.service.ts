import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

export const CURRENCIES = ['PLN', 'USD', 'EUR', 'GBP', 'CHF'];

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeForm {
  private readonly formBuilder = inject(FormBuilder);

  readonly saveForm = new BehaviorSubject<boolean>(false);

  build() {
    return this.formBuilder.group({
      buyCurrency: ['PLN', Validators.required],
      sellCurrency: ['EUR', Validators.required],
      buyAmount: [null as number | null, [Validators.required, Validators.min(0.01)]],
      sellAmount: [null as number | null, [Validators.required, Validators.min(0.01)]],
    });
  }

  save(): void {
    this.saveForm.next(true);
  }
}
