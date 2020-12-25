import { TestBed } from '@angular/core/testing';

import { LaptopRepairService } from './laptop-repair.service';

describe('LaptopRepairService', () => {
  let service: LaptopRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
