import { TestBed } from '@angular/core/testing';

import { LearningCourseService } from './learning-course.service';

describe('LearningCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningCourseService = TestBed.get(LearningCourseService);
    expect(service).toBeTruthy();
  });
});
