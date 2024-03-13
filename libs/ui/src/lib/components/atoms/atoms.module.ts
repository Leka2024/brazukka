import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CountryComponent } from './country/country.component';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ButtonComponent, CountryComponent, IconComponent, LinkComponent ],
    imports: [CommonModule],
    exports: [ButtonComponent, CountryComponent, IconComponent, LinkComponent],
})
export class AtomsModule {}
