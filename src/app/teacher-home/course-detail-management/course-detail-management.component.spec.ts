import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailManagementComponent } from './course-detail-management.component';

describe('CourseDetailManagementComponent', () => {
  let component: CourseDetailManagementComponent;
  let fixture: ComponentFixture<CourseDetailManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDetailManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
