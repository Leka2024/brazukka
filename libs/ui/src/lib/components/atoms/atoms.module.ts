// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [ButtonComponent, CountryComponent, IconComponent, LinkComponent ],
    imports: [CommonModule],
    exports: [ButtonComponent, CountryComponent, IconComponent, LinkComponent],
})
export class AtomsModule {}
