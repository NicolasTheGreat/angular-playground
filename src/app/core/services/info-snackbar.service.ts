import { Injectable, InjectionToken } from '@angular/core';

export interface ISnackbar {
  open(): void;
}

@Injectable()
export class InfoSnackbarService implements ISnackbar {
  openInfoSnackbar(): void {}

  open(): void {
    this.openInfoSnackbar();
  }
}

export const SNACKBAR_TOKEN = new InjectionToken<ISnackbar>('SNACKBAR_TOKEN');
