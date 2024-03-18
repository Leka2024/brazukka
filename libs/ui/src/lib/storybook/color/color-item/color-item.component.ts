// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface IColor {
  color: string;
  function: string;
  scssVariable: string;
  cssVariable: string;
}

@Component({
  selector: 'brazukka-color-item',
  templateUrl: './color-item.component.html',
  styleUrl: './color-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorItemComponent {
  @Input({required: true}) title!: string;
  @Input({required: false}) subtitle: string;
  @Input({required: true}) colors: Array<IColor> = [];
}
