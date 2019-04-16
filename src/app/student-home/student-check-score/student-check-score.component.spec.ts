import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCheckScoreComponent } from './student-check-score.component';

describe('StudentCheckScoreComponent', () => {
  let component: StudentCheckScoreComponent;
  let fixture: ComponentFixture<StudentCheckScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCheckScoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCheckScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
