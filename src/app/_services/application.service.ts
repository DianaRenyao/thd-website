import { Injectable } from '@angular/core';
import { ApplicationMessage } from '../_models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicationCreationMessage } from '../_models/application-creation-message';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getStudentCourseApplication(studentUsername: string, courseId: number): Observable<ApplicationMessage> {
    return this.http.get<ApplicationMessage>(`courses/${ courseId }/applications`, {
      params: {
        student: studentUsername,
      }
    });
  }

  apply(studentUsername: string, courseId: number,
        applicationCreationMessage: ApplicationCreationMessage): Observable<ApplicationMessage> {
    return this.http.post<ApplicationMessage>(`courses/${ courseId }/applications`, applicationCreationMessage);
  }
}
