import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopRepairPartsComponent } from './laptop-repair-parts.component';

describe('LaptopRepairPartsComponent', () => {
  let component: LaptopRepairPartsComponent;
  let fixture: ComponentFixture<LaptopRepairPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopRepairPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopRepairPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
