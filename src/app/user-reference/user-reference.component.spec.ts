import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReferenceComponent } from './user-reference.component';

describe('UserReferenceComponent', () => {
  let component: UserReferenceComponent;
  let fixture: ComponentFixture<UserReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserReferenceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
