import { AtomsModule } from './atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from './molecules/molecules.module';
import { NgModule } from '@angular/core';
import { OrganismsModule } from './organisms/organisms.module';
import { PagesModule } from './pages/pages.module';
import { ParticlesModule } from './particles/particles.module';
import { TemplatesModule } from './templates/templates.module';

@NgModule({
    imports: [CommonModule, ParticlesModule, AtomsModule, MoleculesModule, OrganismsModule, TemplatesModule, PagesModule],
    exports: [ParticlesModule, AtomsModule, MoleculesModule, OrganismsModule, TemplatesModule, PagesModule],
    declarations: [],
})
export class ComponentsModule {}
