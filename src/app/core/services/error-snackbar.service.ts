import { Injectable, InjectionToken } from '@angular/core';

export interface ISnackbar {
  open(): void;
}

@Injectable()
export class ErrorSnackbarService implements ISnackbar {
  openErrorSnackbar(): void {}

  open(): void {
    this.openErrorSnackbar();
  }
}

export const ERROR_SNACKBAR_TOKEN = new InjectionToken<ISnackbar>('ERROR_SNACKBAR_TOKEN');
