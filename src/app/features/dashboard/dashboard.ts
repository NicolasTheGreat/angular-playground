import { Component } from '@angular/core';
import { MainSection } from '../main-section/main-section';
import { SNACKBAR_MODE } from '../../core/tokens/snackbar-mode.token';

@Component({
  selector: 'app-dashboard',
  imports: [MainSection],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [{ provide: SNACKBAR_MODE, useValue: 'ERROR' }],
})
export class Dashboard {}
