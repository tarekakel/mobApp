import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesSingleComponent } from './accessories-single.component';

describe('AccessoriesSingleComponent', () => {
  let component: AccessoriesSingleComponent;
  let fixture: ComponentFixture<AccessoriesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
