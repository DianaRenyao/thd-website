import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableCourseComponent } from './selectable-course.component';

describe('SelectableCourseComponent', () => {
  let component: SelectableCourseComponent;
  let fixture: ComponentFixture<SelectableCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectableCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
