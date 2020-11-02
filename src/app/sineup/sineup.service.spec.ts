import { TestBed } from '@angular/core/testing';

import { SineupService } from './sineup.service';

describe('SineupService', () => {
  let service: SineupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SineupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
