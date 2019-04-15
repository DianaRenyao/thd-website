import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Score} from '../_models/score-creation-message';


@Injectable({
  providedIn: 'root'
})

export class ScoreService {

  constructor(private http: HttpClient) {
  }

  getScores(username: string): Observable<Score[]> {
    return this.http.get<Score[]>(`selectedCourse/${username}`, {});
  }

  getCourseScores(courseId: number): Observable<Score[]> {
    return this.http.get<Score[]>(`selectedCourse/course/${courseId}`, {});
  }

  addSelectedScore(score: Score, studentId: number, courseId: number): Observable<Score> {
    return this.http.post<Score>(`selectedCourse/score`, score, {
      params: {
        studentUserId: studentId.toString(),
        courseCourseId: courseId.toString(),
      }
    });
  }

}

