// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import type { OnInit } from '@angular/core';
import type { TColors } from '@brazukka/types';

export type TIConPosition = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'brazukka-link',
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent implements OnInit {

  @HostBinding('style') hostStyle!: string;
  @Input({required: true}) value!: string;
  @Input({required: true}) label!: string;
  @Input({required: true}) color: TColors = 'black';

  @Input() icon: string | undefined;
  @Input() iconPosition: TIConPosition = 'left';

  @Output() readonly clicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    if (this.icon && this.iconPosition === 'top') {
      this.hostStyle = 'display: flex; flex-direction: column; align-items: center; row-gap: 1rem;';
    } else if (this.icon && this.iconPosition === 'right') {
      this.hostStyle = 'display: flex; flex-direction: row-reverse; align-items: center; justify-content: center; column-gap: 0.5rem;';
    } else if (this.icon && this.iconPosition === 'bottom') {
      this.hostStyle = 'display: flex; flex-direction: column-reverse; align-items: center; row-gap: 1rem;';
    } else if (this.icon && this.iconPosition === 'left') {
      this.hostStyle = 'display: flex; flex-direction: row; align-items: center;  justify-content: center; column-gap: 0.5rem;';
    }
  }
  link(event: string): void {
    this.clicked.emit(event);
  }
}

