// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { AtomsModule } from '../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule, RouterModule, AtomsModule, MoleculesModule],
    exports: [HeaderComponent, FooterComponent],
})
export class OrganismsModule {}
