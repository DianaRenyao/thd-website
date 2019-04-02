import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Session } from '../_models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private currentSessionSubject: BehaviorSubject<Session>;

  constructor(
    private http: HttpClient
  ) {
    const saved = localStorage.getItem('currentSession');
    const parsed = JSON.parse(saved);
    this.currentSessionSubject = new BehaviorSubject<Session>(parsed);
  }

  get currentSession(): Observable<Session> {
    return this.currentSessionSubject.asObservable();
  }

  get currentSessionValue(): Session {
    return this.currentSessionSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(`session`, { username, password })
      .pipe(map(session => {
        // login successful if jwt token is in the response
        if (session && session.token) {
          // store session details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentSession', JSON.stringify(session));
          this.currentSessionSubject.next(session);
        }

        return session;
      }));
  }

  logout() {
    // just remote the token to logout
    localStorage.removeItem('currentSession');
    this.currentSessionSubject.next(null);
  }
}
