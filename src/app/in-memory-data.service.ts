import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Owoc } from './owocki/owoc';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owocki: Owoc[] = [
      { id: 11, name: 'toskafka' },
      { id: 12, name: 'gruszka' },
      { id: 13, name: 'pomarańcza' },
      { id: 14, name: 'pomelo' },
      { id: 15, name: 'kaki' },
      { id: 16, name: 'mandarynka' },
      { id: 17, name: 'jabłko' },
      { id: 18, name: 'winogrona' },
      { id: 19, name: 'banan' },
      { id: 20, name: 'Domi' },
      { id: 21, name: 'kiwi' }
    ];
    return {owocki};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(owocki: Owoc[]): number {
    return owocki.length > 0 ? Math.max(...owocki.map(owoc => owoc.id)) + 1 : 11;
  }
}