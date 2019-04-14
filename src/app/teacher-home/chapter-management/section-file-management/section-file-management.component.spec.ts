import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFileManagementComponent } from './section-file-management.component';

describe('SectionFileManagementComponent', () => {
  let component: SectionFileManagementComponent;
  let fixture: ComponentFixture<SectionFileManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFileManagementComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
