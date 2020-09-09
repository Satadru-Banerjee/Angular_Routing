import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptList1Component } from './dept-list1.component';

describe('DeptList1Component', () => {
  let component: DeptList1Component;
  let fixture: ComponentFixture<DeptList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
