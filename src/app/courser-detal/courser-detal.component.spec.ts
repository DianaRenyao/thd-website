import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserDetalComponent } from './courser-detal.component';

describe('CourserDetalComponent', () => {
  let component: CourserDetalComponent;
  let fixture: ComponentFixture<CourserDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourserDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourserDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
