import { TestBed } from '@angular/core/testing';

import { FunfactDataService } from './funfact-data.service';

describe('FunfactDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunfactDataService = TestBed.get(FunfactDataService);
    expect(service).toBeTruthy();
  });
});
