import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentMessage, StudentRegisterMessage, TeacherMessage } from '../_models';
import { TeacherRegisterMessage } from '../_models/teacher-register-message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(registerMessage: StudentRegisterMessage): Observable<StudentMessage> {
    return this.http.post<StudentMessage>('students', registerMessage);
  }

  addTeacher(registerMessage: TeacherRegisterMessage): Observable<TeacherMessage> {
    return this.http.post<TeacherMessage>('teachers', registerMessage);
  }

  getAllTeachers(): Observable<TeacherMessage[]> {
    return this.http.get<TeacherMessage[]>('teachers');
  }
}
