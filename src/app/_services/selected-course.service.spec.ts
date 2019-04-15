import { TestBed } from '@angular/core/testing';

import { SelectedCourseService } from './selected-course.service';

describe('SelectedCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedCourseService = TestBed.get(SelectedCourseService);
    expect(service).toBeTruthy();
  });
});
