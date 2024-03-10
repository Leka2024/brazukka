import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

import { IconsRegistryService } from '../../../assets';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnChanges {

  @Input() label: string | undefined;
  @Input() color: string | 'default' = 'default';
  @Input() css!: string;
  @Input() size: 'small' | 'extra-small' | 'regular' | 'medium' | 'large' | 'huge' = 'regular';
  @Input() type = '';

  constructor(private readonly element: ElementRef,
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
