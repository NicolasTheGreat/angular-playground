import { Component, inject, OnInit } from '@angular/core';
import { CurrencyExchange } from '../currency-exchange/currency-exchange';
import { ExchangeRates } from '../exchange-rates/exchange-rates';
import { InfoSnackbarService, SNACKBAR_TOKEN } from '../../core/services/info-snackbar.service';
import { ErrorSnackbarService } from '../../core/services/error-snackbar.service';
import { SNACKBAR_MODE, SnackbarMode } from '../../core/tokens/snackbar-mode.token';

@Component({
  selector: 'app-main-section',
  imports: [CurrencyExchange, ExchangeRates],
  templateUrl: './main-section.html',
  styleUrl: './main-section.scss',
  providers: [
    {
      provide: SNACKBAR_TOKEN,
      useFactory: (mode: SnackbarMode) => (mode === 'ERROR' ? new ErrorSnackbarService() : new InfoSnackbarService()),
      deps: [SNACKBAR_MODE],
    },
  ],
})
export class MainSection implements OnInit {
  private readonly snackbar = inject(SNACKBAR_TOKEN);

  ngOnInit(): void {
    this.snackbar.open();
  }
}
