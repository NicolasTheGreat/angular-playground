import { TestBed } from '@angular/core/testing';

import { CurrencyExchangeForm } from './currency-exchange-form.service';

describe('CurrencyExchangeForm', () => {
  let service: CurrencyExchangeForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyExchangeForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
