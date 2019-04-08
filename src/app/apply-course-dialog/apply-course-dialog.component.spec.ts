import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCourseDialogComponent } from './apply-course.component';

describe('ApplyCourseComponent', () => {
  let component: ApplyCourseDialogComponent;
  let fixture: ComponentFixture<ApplyCourseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyCourseDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyCourseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
