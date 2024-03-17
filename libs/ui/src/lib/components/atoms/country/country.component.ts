// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { ChangeDetectionStrategy, Component, Inject, Input , ElementRef} from '@angular/core';
import type { OnChanges, SimpleChanges } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { CountryRegistryService } from '../../../assets';
import type { TSizes } from '@brazukka/types';

@Component({
  selector: 'brazukka-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnChanges {

  @Input() label: string | undefined;
  @Input() size: TSizes = 'regular';
  @Input() type = '';

  constructor(@Inject(ElementRef) private readonly element: ElementRef,
              private readonly countriesRegistry: CountryRegistryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { type } = changes;

    if (type) {
      const i: HTMLElement | null = this.element.nativeElement.querySelector('i');

      if (i) {
        let svg = this.countriesRegistry.getCountry(type.currentValue);

        svg = svg ? svg : '';

        this.element.nativeElement.querySelector('i').innerHTML = svg;
      }
    }
  }


}
