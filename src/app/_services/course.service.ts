import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CourseMessage, SessionMessage} from '../_models';
import {CourseCreationMessage} from '../_models/course-creation-message';
import {CourseSummaryMessage} from '../_models/course-summary-message';
import {ChapterMessage} from '../_models/chapter-message';
import {ChapterCreationMessage} from '../_models/chapter-creation-message';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private  http: HttpClient
  ) {
  }

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

  getTeacherCourses(username: string): Observable<CourseSummaryMessage[]> {
    return this.http.get<CourseSummaryMessage[]>('courses', {
      params: {
        selectable: 'false',
        teacher: username
      }
    });
  }

  getCourseDetail(courseId: number): Observable<CourseMessage> {
    return this.http.get<CourseMessage>(`courses/${courseId}`);
  }

  getCourseOfTeacher(sessionMessage: SessionMessage): Observable<CourseSummaryMessage[]> {
    return this.http.get<CourseSummaryMessage[]>('courses', {
      params: {
        teacher: sessionMessage.userInfo.username,
      }
    });
  }

  getChapterOfCourse(courseId: number): Observable<ChapterMessage[]> {
    return this.http.get<ChapterMessage[]>(`courses/${courseId}/chapters`);
  }

  addChapter(courseId: number, chapterCreationMessage: ChapterCreationMessage): Observable<ChapterMessage> {
    return this.http.post<ChapterMessage>(`courses/${courseId}/chapters`, chapterCreationMessage);
  }
}
