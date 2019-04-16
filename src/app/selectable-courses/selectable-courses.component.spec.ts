import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableCoursesComponent } from './selectable-courses.component';

describe('SelectableCoursesComponent', () => {
  let component: SelectableCoursesComponent;
  let fixture: ComponentFixture<SelectableCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectableCoursesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
