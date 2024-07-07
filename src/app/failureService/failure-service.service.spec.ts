import { TestBed } from '@angular/core/testing';

import { FailureServiceService } from './failure-service.service';

describe('FailureServiceService', () => {
  let service: FailureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FailureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
