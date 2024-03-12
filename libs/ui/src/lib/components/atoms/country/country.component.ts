import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountryRegistryService } from '../../../assets';

export type TSizes = 'small' | 'extra-small' | 'regular' | 'medium' | 'large' | 'huge';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnChanges {

  @Input() label: string | undefined;
  @Input() size: TSizes = 'regular';
  @Input() type = '';

  constructor(private readonly element: ElementRef,
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