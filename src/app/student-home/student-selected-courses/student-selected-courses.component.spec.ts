import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSelectedCoursesComponent } from './student-selected-courses.component';

describe('StudentSelectedCoursesComponent', () => {
  let component: StudentSelectedCoursesComponent;
  let fixture: ComponentFixture<StudentSelectedCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSelectedCoursesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSelectedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
