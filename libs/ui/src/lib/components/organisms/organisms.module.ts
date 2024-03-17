import { AtomsModule } from '../atoms/atoms.module';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [HeaderComponent, FooterComponent],
    imports: [CommonModule, AtomsModule, MoleculesModule],
    exports: [HeaderComponent, FooterComponent],
})
export class OrganismsModule {}
