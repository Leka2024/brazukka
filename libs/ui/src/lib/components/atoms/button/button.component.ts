// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
/* eslint-disable @typescript-eslint/consistent-type-imports */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TColors, TIconSet, TSizes } from '@brazukka/types';

import { OnInit } from '@angular/core';

@Component({
  selector: 'brazukka-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit{

  @Input() label: string | undefined;
  @Input({required: true}) color: TColors = 'black';
  @Input({required: true}) size: TSizes = 'regular';
  @Input() icon: string | undefined;
  @Input() iconOnly: boolean | undefined;
  @Input() iconSet: TIconSet | undefined;

  @Output() clicked: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit(): void {
    if (this.icon && !this.iconOnly) {
      throw new Error('[iconOnly] needs to be set');
    }
  }

  click(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
