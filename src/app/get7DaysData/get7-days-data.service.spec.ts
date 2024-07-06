import { TestBed } from '@angular/core/testing';

import { Get7DaysDataService } from './get7-days-data.service';

describe('Get7DaysDataService', () => {
  let service: Get7DaysDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Get7DaysDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
