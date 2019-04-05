import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentRegisterMessage, UserInfoMessage } from '../_models';

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
}
