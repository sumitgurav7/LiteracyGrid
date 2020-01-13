import { TestBed } from '@angular/core/testing';

import { LiteracyService } from './literacy.service';

describe('LiteracyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiteracyService = TestBed.get(LiteracyService);
    expect(service).toBeTruthy();
  });
});
