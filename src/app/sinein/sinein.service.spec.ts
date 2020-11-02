import { TestBed } from '@angular/core/testing';

import { SineinService } from './sinein.service';

describe('SineinService', () => {
  let service: SineinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SineinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
