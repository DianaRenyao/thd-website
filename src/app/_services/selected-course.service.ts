import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SelectedCourseCreationMessage} from '../_models/selected-course-creation-message';
import {SelectedCourseMessage} from '../_models/selected-course-message';


@Injectable({
  providedIn: 'root'
})

export class SelectedCourseService {

  constructor(private http: HttpClient) {
  }

  getStudentScores(username: string): Observable<SelectedCourseMessage[]> {
    return this.http.get<SelectedCourseMessage[]>(`students/${username}/selectedCourses`);
  }

  getCourseScores(username: string, courseId: number): Observable<SelectedCourseMessage[]> {
    return this.http.get<SelectedCourseMessage[]>(`teachers/${username}/courses/${courseId}/students`);
  }

  addSelectedCourseScore(score: SelectedCourseCreationMessage, studentId: number,
                         courseId: number, username: string): Observable<SelectedCourseMessage> {
    return this.http.post<SelectedCourseMessage>(`teachers/${username}/courses/${courseId}/students`, score, {
      params: {
        studentUserId: studentId.toString(),
      }
    });
  }

}

