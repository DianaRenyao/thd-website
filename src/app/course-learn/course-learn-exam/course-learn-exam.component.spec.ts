import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLearnExamComponent } from './course-learn-exam.component';

describe('CourseLearnExamComponent', () => {
  let component: CourseLearnExamComponent;
  let fixture: ComponentFixture<CourseLearnExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLearnExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLearnExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
