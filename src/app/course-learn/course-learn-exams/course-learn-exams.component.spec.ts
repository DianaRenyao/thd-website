import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLearnExamsComponent } from './course-learn-exams.component';

describe('CourseLearnExamsComponent', () => {
  let component: CourseLearnExamsComponent;
  let fixture: ComponentFixture<CourseLearnExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseLearnExamsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLearnExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
