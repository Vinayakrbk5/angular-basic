import { TestBed } from '@angular/core/testing';

import { GethistoryService } from './gethistory.service';

describe('GethistoryService', () => {
  let service: GethistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GethistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
