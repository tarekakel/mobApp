import { TestBed } from '@angular/core/testing';

import { MobileRepairService } from './mobile-repair.service';

describe('MobileRepairService', () => {
  let service: MobileRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
