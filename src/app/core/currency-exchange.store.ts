import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, tap } from 'rxjs';

type CurrencyExchangeState = {
  buyCurrency: string;
  sellCurrency: string;
  buyAmount: number | null;
  sellAmount: number | null;
  saved: boolean;
};

const initialState: CurrencyExchangeState = {
  buyCurrency: 'PLN',
  sellCurrency: 'EUR',
  buyAmount: null,
  sellAmount: null,
  saved: false,
};

export const CurrencyExchangeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setBuyCurrency(buyCurrency: string): void {
      patchState(store, { buyCurrency });
    },
    setSellCurrency(sellCurrency: string): void {
      patchState(store, { sellCurrency });
    },
    setBuyAmount(buyAmount: number | null): void {
      patchState(store, { buyAmount });
    },
    setSellAmount(sellAmount: number | null): void {
      patchState(store, { sellAmount });
    },
    save(): void {
      patchState(store, { saved: true });
    },
    patchAll: rxMethod<Partial<CurrencyExchangeState>>(
      pipe(tap((state) => patchState(store, state))),
    ),
  })),
);
