import {CommonModule} from '@angular/common';
import { CountryRegistryService } from './country.registry.service';
import {NgModule} from '@angular/core';
import {countries} from './countries';

@NgModule({
  imports: [CommonModule]
})
export class CountriesModule {
  constructor(private readonly countryRegistry: CountryRegistryService) {
    this.countryRegistry.registerCountries([...countries]);
  }
}
