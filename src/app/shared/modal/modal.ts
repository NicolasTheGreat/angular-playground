import { Component, effect, inject, Injector, input, InputSignal, model, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal implements OnInit {

  readonly title: InputSignal<string> = input.required<string>();

  readonly visible = model(false);

  readonly close = output<void>();

  ngOnInit(): void {
    this.hideModal();
  }

  protected onClose(): void {
    this.close.emit();
  }

  hideModal(): void {
    effect(
      () => {
        if (!this.title()) {
          this.visible.set(false);
        }
      },
    );
  }
}
