import { CountriesModule } from './countries/countries.module';
import { IconsModule } from './icons/icons.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CountriesModule, IconsModule],
    exports: [],
    declarations: [],
})
export class AssetsModule {}
