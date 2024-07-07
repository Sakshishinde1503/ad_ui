import { TestBed } from '@angular/core/testing';

import { CurrentDayDataService } from './current-day-data.service';

describe('CurrentDayDataService', () => {
  let service: CurrentDayDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentDayDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
