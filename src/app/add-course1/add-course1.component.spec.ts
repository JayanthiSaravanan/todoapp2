import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourse1Component } from './add-course1.component';

describe('AddCourse1Component', () => {
  let component: AddCourse1Component;
  let fixture: ComponentFixture<AddCourse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourse1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
