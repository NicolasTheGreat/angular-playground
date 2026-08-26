import { InjectionToken } from '@angular/core';

export type SnackbarMode = 'ERROR' | 'INFO';

export const SNACKBAR_MODE = new InjectionToken<SnackbarMode>('SNACKBAR_MODE');
