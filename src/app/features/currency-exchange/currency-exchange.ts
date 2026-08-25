import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

const CURRENCIES = ['PLN', 'USD', 'EUR', 'GBP', 'CHF'];

@Component({
  selector: 'app-currency-exchange',
  imports: [ReactiveFormsModule],
  templateUrl: './currency-exchange.html',
  styleUrl: './currency-exchange.scss',
})
export class CurrencyExchange {
  protected readonly currencies = CURRENCIES;

  private readonly formBuilder = inject(FormBuilder);

  protected readonly exchangeForm = this.formBuilder.group({
    buyCurrency: ['PLN', Validators.required],
    sellCurrency: ['EUR', Validators.required],
    buyAmount: [null as number | null, [Validators.required, Validators.min(0.01)]],
    sellAmount: [null as number | null, [Validators.required, Validators.min(0.01)]],
  });

  protected onSubmit(): void {
    if (this.exchangeForm.invalid) {
      this.exchangeForm.markAllAsTouched();
      return;
    }

    console.log('Currency exchange request', this.exchangeForm.value);
  }
}
