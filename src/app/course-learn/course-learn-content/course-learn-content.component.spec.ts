import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLearnContentComponent } from './course-learn-content.component';

describe('CourseLearnContentComponent', () => {
  let component: CourseLearnContentComponent;
  let fixture: ComponentFixture<CourseLearnContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseLearnContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLearnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
