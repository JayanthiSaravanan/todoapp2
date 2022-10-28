import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourse1Component } from './list-course1.component';

describe('ListCourse1Component', () => {
  let component: ListCourse1Component;
  let fixture: ComponentFixture<ListCourse1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourse1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCourse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
