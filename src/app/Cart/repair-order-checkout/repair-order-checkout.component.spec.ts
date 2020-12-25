import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairOrderCheckoutComponent } from './repair-order-checkout.component';

describe('RepairOrderCheckoutComponent', () => {
  let component: RepairOrderCheckoutComponent;
  let fixture: ComponentFixture<RepairOrderCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairOrderCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairOrderCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
