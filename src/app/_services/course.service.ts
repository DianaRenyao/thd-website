import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TeacherRegisterMessage} from '../_models/teacher-register-message';
import {Observable} from 'rxjs';
import {TeacherMessage, UserInfoMessage} from '../_models';
import {CourseCreationMessage} from '../_models/course-creation-message';
import {CourseMessage} from '../_models/course-message';

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

  getSelectableCourses(): Observable<CourseMessage[]> {
    return this.http.get<CourseMessage[]>('courses', {
      params: {
        selectable: 'true'
      }
    });
  }
}
