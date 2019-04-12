import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Score} from '../_models/score-message';


@Injectable({
  providedIn: 'root'
})

export class ScoreService {

  private scoresUrl = 'scores';  // URL to web api
  constructor(private http: HttpClient) {
  }

  getScores(username: string): Observable<Score[]> {
    return this.http.get<Score[]>(`scores/${username}`, {});
  }

  getCourseScores(courseId: number): Observable<Score[]> {
    return this.http.get<Score[]>(`scores/course/${courseId}`, {});
  }

  addSelectedScore(score: Score, studentId: number, courseId: number): Observable<Score> {
    return this.http.post<Score>(`scores/import`, score, {
      params: {
        studentUserId: studentId.toString(),
        courseCourseId: courseId.toString(),
      }
    });
  }

}

