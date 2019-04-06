import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Score} from '../_models/score-interface';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private scoresUrl = 'scores';  // URL to web api
  constructor(private http: HttpClient) {
  }

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoresUrl);
  }
}
