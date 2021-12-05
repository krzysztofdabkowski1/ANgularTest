import { TestBed } from '@angular/core/testing';

import { OwockiDataService } from './owocki-data.service';

describe('OwockiDataService', () => {
  let service: OwockiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwockiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
