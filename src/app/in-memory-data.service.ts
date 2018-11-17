import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. A' },
      { id: 12, name: 'Mr. B' },
      { id: 13, name: 'Mr. C' },
      { id: 14, name: 'Mr. D' },
      { id: 15, name: 'Mr. E' },
      { id: 16, name: 'Mr. F' },
      { id: 17, name: 'Mr. G' },
      { id: 18, name: 'Mr. H' },
      { id: 19, name: 'Mr. I' },
      { id: 20, name: 'Mr. J' },
      { id: 21, name: 'Mr. K' }
    ];
    return { heroes };
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
  constructor() {}
}
