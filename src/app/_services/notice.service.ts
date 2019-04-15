import {Injectable} from '@angular/core';
import {NoticeCreationMessage, NoticeMessage, SessionMessage} from '../_models';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';

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

  getNoticesCount(): Observable<number> {
    return this.http.head('notices', {
      observe: 'response',
    })
      .pipe(
        map((response: HttpResponse<any>) => {
          console.log(response.headers.get('X-Total-Count'));
          return parseInt(response.headers.get('X-Total-Count'), 10);
        })
      );
  }

  getNoticesRanged(first: number, n: number): Observable<NoticeMessage[]> {
    return this.http.get<NoticeMessage[]>('notices', {
      params: {
        first: first.toString(10),
        number: n.toString(10),
      }
    });
  }

  createNotice(creationMessage: NoticeCreationMessage): Observable<NoticeMessage> {
    return this.http.post<NoticeMessage>('notices', creationMessage);
  }

  getTeacherNotices(session: SessionMessage): Observable<NoticeMessage[]> {
    return this.http.get<NoticeMessage[]>(`notices/${session.userInfo.username}/notices`);
  }
}
