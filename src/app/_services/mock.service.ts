import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(
    private http: HttpClient,
  ) {
  }

  createUserMockData(): Observable<void> {
    return this.http.post<void>('meta/mock/users', null);
  }

  createCourseMockData(): Observable<void> {
    return this.http.post<void>('meta/mock/courses', null);
  }
}
