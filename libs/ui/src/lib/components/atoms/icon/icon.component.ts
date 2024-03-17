// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import {ChangeDetectionStrategy, Component, Input, ElementRef, Inject} from '@angular/core';
import type { OnChanges, SimpleChanges } from '@angular/core';
import type { TColors, TSizes } from '@brazukka/types';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { IconsRegistryService } from '@brazukka/assets';

@Component({
  selector: 'brazukka-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {

  @Input() label: string | undefined;
  @Input({required: true}) color: TColors = 'black';
  @Input() css!: string;
  @Input() size: TSizes = 'regular';
  @Input() type = '';

  constructor(@Inject(ElementRef) private readonly element: ElementRef,
              private readonly iconsRegistry: IconsRegistryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { type } = changes;

    if (type) {
      const i: HTMLElement | null = this.element.nativeElement.querySelector('i');

      if (i) {
        let svg = this.iconsRegistry.getIcon(type.currentValue);

        svg = svg ? svg : '';

        this.element.nativeElement.querySelector('i').innerHTML = svg;
      }
    }
  }


}
