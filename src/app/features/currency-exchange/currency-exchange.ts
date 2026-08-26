import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CURRENCIES, CurrencyExchangeForm } from '../../core/services/currency-exchange-form.service';

@Component({
  selector: 'app-currency-exchange',
  imports: [ReactiveFormsModule],
  templateUrl: './currency-exchange.html',
  styleUrl: './currency-exchange.scss',
})
export class CurrencyExchange {
  protected readonly currencies = CURRENCIES;

  private readonly currencyExchangeForm = inject(CurrencyExchangeForm);

  protected readonly exchangeForm = this.currencyExchangeForm.build();

  protected onSubmit(): void {
    if (this.exchangeForm.invalid) {
      this.exchangeForm.markAllAsTouched();
      return;
    }

    console.log('Currency exchange request', this.exchangeForm.value);
  }
}
