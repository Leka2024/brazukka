import { Country } from './country';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CountryRegistryService {

  private readonly registry: Map<string, string> = new Map();

  registerCountries(countries: Array<Country>): void {
    countries.forEach(country => {
      this.registry.set(country.abbreviation, country.data);
    });
  }

  getCountry(name: string): string | undefined {
    if (!this.registry.has(name)) {
      console.warn(`Country ${name} was not found in the Country Registry`);
    }

    return this.registry.get(name);
  }
}
