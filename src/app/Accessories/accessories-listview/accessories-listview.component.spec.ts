import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesListviewComponent } from './accessories-listview.component';

describe('AccessoriesListviewComponent', () => {
  let component: AccessoriesListviewComponent;
  let fixture: ComponentFixture<AccessoriesListviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesListviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
