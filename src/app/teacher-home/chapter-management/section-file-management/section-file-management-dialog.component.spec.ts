import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFileManagementDialogComponent } from './section-file-management-dialog.component';

describe('SectionFileManagementDialogComponent', () => {
  let component: SectionFileManagementDialogComponent;
  let fixture: ComponentFixture<SectionFileManagementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFileManagementDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFileManagementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
