import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brazukka-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
