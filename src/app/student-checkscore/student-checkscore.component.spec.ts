import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCheckscoreComponent } from './student-checkscore.component';

describe('StudentCheckscoreComponent', () => {
  let component: StudentCheckscoreComponent;
  let fixture: ComponentFixture<StudentCheckscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCheckscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCheckscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
