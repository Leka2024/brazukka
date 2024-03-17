import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'brazukka-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrl: './inspiration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InspirationComponent {}
