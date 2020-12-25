import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRepairPartsComponent } from './mobile-repair-parts.component';

describe('MobileRepairPartsComponent', () => {
  let component: MobileRepairPartsComponent;
  let fixture: ComponentFixture<MobileRepairPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRepairPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRepairPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
