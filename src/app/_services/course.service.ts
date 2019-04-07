import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeacherRegisterMessage} from '../_models/teacher-register-message';
import {Observable} from 'rxjs';
import {TeacherMessage, UserInfoMessage} from '../_models';
import {CourseCreationMessage} from '../_models/course-creation-message';
import {CourseSummaryMessage} from '../_models/course-summary-message';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private  http: HttpClient
  ) { }

  addCourse(courseCreationMessage: CourseCreationMessage): Observable<CourseCreationMessage> {
    return this.http.post<CourseCreationMessage>('courses', courseCreationMessage);
  }

  getSelectableCourses(): Observable<CourseSummaryMessage[]> {
    return this.http.get<CourseSummaryMessage[]>('courses', {
      params: {
        selectable: 'true'
      }
    });
  }
}
