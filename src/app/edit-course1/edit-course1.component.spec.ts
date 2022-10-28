import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourse1Component } from './edit-course1.component';

describe('EditCourse1Component', () => {
  let component: EditCourse1Component;
  let fixture: ComponentFixture<EditCourse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourse1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
