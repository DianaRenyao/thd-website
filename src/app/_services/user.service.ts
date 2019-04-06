import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentRegisterMessage, UserInfoMessage } from '../_models';
import {TeacherRegisterMessage} from '../_models/teacher-register-message';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  register(registerMessage: StudentRegisterMessage): Observable<UserInfoMessage> {
    return this.http.post<UserInfoMessage>('students', registerMessage);
  }
  addTeacher(registerMessage: TeacherRegisterMessage): Observable<UserInfoMessage> {
    return this.http.post<UserInfoMessage>('teachers', registerMessage);
  }
  getAllTeachers(): Observable<UserInfoMessage[]> {
    return this.http.get<UserInfoMessage[]>('teachers');
  }
}
