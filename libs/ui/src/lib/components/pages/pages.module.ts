// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { AssetsModule } from '../../assets/assets.module';
import { AtomsModule } from '../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { MaxxyTilesLayoutComponent } from './maxxy-tiles-layout/maxxy-tiles-layout.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';

/**
 * Pages Module
 */
@NgModule({
    declarations: [MaxxyTilesLayoutComponent],
    imports: [CommonModule, RouterModule, AssetsModule, AtomsModule, MoleculesModule, OrganismsModule, TemplatesModule],
    exports: [MaxxyTilesLayoutComponent],
})
export class PagesModule {}
