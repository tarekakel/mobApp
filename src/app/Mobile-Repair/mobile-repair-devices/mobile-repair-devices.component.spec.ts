import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRepairDevicesComponent } from './mobile-repair-devices.component';

describe('MobileRepairDevicesComponent', () => {
  let component: MobileRepairDevicesComponent;
  let fixture: ComponentFixture<MobileRepairDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRepairDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRepairDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
