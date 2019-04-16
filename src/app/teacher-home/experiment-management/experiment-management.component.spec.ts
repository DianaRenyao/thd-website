import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentManagementComponent } from './experiment-management.component';

describe('ExperimentManagementComponent', () => {
  let component: ExperimentManagementComponent;
  let fixture: ComponentFixture<ExperimentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperimentManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
