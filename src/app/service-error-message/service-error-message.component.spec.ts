import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceErrorMessageComponent } from './service-error-message.component';

describe('ServiceErrorMessageComponent', () => {
  let component: ServiceErrorMessageComponent;
  let fixture: ComponentFixture<ServiceErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceErrorMessageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
