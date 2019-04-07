import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
<<<<<<< HEAD
import {Score} from '../_models/score-message';
=======
import {Score} from '../_models/score-interface';
>>>>>>> 5a3e15293e32478ed3d1d57967c1a66d094c3b3b

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

export class ScoreService {

=======
export class ScoreService {


>>>>>>> 5a3e15293e32478ed3d1d57967c1a66d094c3b3b
  private scoresUrl = 'scores';  // URL to web api
  constructor(private http: HttpClient) {
  }

  getScores(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoresUrl);
  }
}
