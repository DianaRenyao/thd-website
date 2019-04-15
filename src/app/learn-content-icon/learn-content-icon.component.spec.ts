import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnContentIconComponent } from './learn-content-icon.component';

describe('LearnContentIconComponent', () => {
  let component: LearnContentIconComponent;
  let fixture: ComponentFixture<LearnContentIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearnContentIconComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnContentIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
