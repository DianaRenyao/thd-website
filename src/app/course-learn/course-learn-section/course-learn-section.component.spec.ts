import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLearnSectionComponent } from './course-learn-section.component';

describe('CourseLearnSectionComponent', () => {
  let component: CourseLearnSectionComponent;
  let fixture: ComponentFixture<CourseLearnSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseLearnSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLearnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
