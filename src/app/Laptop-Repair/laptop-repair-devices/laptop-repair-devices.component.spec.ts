import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopRepairDevicesComponent } from './laptop-repair-devices.component';

describe('LaptopRepairDevicesComponent', () => {
  let component: LaptopRepairDevicesComponent;
  let fixture: ComponentFixture<LaptopRepairDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopRepairDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopRepairDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
