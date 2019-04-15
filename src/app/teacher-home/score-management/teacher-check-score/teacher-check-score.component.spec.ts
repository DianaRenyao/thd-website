import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCheckScoreComponent } from './teacher-check-score.component';

describe('TeacherCheckScoreComponent', () => {
  let component: TeacherCheckScoreComponent;
  let fixture: ComponentFixture<TeacherCheckScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherCheckScoreComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCheckScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
