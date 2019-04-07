import { Injectable } from '@angular/core';
import { NoticeMessage } from '../_models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllNotices(): Observable<NoticeMessage[]> {
    return this.http.get<NoticeMessage[]>('notices');
  }

  getRecentNotices(): Observable<NoticeMessage[]> {
    return this.http.get<NoticeMessage[]>('notices', {
      params: {
        first: '0',
        number: '5',
      }
    });
  }
}
