import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCheckscoreComponent } from './teacher-checkscore.component';

describe('TeacherCheckscoreComponent', () => {
  let component: TeacherCheckscoreComponent;
  let fixture: ComponentFixture<TeacherCheckscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCheckscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCheckscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
