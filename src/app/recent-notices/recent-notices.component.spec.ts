import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentNoticesComponent } from './recent-notices.component';

describe('RecentNoticesComponent', () => {
  let component: RecentNoticesComponent;
  let fixture: ComponentFixture<RecentNoticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentNoticesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
