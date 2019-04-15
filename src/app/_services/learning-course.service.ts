import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CourseMessage } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class LearningCourseService {

  private course: BehaviorSubject<CourseMessage> = new BehaviorSubject<CourseMessage>(null);

  constructor() {
  }

  get currentLearningCourseValue(): CourseMessage {
    return this.course.value;
  }

  get currentLearningCourse(): Observable<CourseMessage> {
    return this.course.asObservable();
  }

  startLearning(course: CourseMessage) {
    this.course.next(course);
  }
}
