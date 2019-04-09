import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MessageWithRepliedMessage } from '../_models/message-with-replied-message';
import { MessageCreationMessage } from '../_models/message-creation-message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getMessagesCount(): Observable<number> {
    return this.http.head('messages', {
      observe: 'response',
      params: {
        withReplied: 'false',
      },
    })
      .pipe(
        map((response: HttpResponse<any>) => {
          console.log(response.headers.get('X-Total-Count'));
          return parseInt(response.headers.get('X-Total-Count'), 10);
        })
      );
  }

  getMessagesWithRepliedRanged(first: number, n: number): Observable<MessageWithRepliedMessage[]> {
    return this.http.get<MessageWithRepliedMessage[]>('messages', {
      params: {
        first: first.toString(10),
        number: n.toString(10),
        withReplied: 'true',
      },
    });
  }

  createMessage(messageCreationMessage: MessageCreationMessage): Observable<MessageWithRepliedMessage> {
    return this.http.post<MessageWithRepliedMessage>('messages', messageCreationMessage);
  }
}
