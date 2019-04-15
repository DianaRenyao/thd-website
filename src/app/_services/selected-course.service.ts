import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SelectedCourse} from '../_models/score-creation-message';


@Injectable({
  providedIn: 'root'
})

export class SelectedCourseService {

  constructor(private http: HttpClient) {
  }

  getStudentScores(username: string): Observable<SelectedCourse[]> {
    return this.http.get<SelectedCourse[]>(`students/${username}/selectedCourses`);
  }

  getCourseScores(username: string, courseId: number): Observable<SelectedCourse[]> {
    return this.http.get<SelectedCourse[]>(`teachers/${username}/courses/${courseId}/students`);
  }

  addSelectedCourseScore(score: SelectedCourse, studentId: number, courseId: number, username: string): Observable<SelectedCourse> {
    return this.http.post<SelectedCourse>(`teachers/${username}/courses/${courseId}/students`, score, {
      params: {
        studentUserId: studentId.toString(),
      }
    });
  }

}

