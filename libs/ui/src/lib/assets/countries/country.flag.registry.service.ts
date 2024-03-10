import { Country } from './country';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CountryFlagRegistryService {
  private readonly registry: Map<string, Country> = new Map();
}
