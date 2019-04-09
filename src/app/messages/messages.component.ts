import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, PageEvent } from '@angular/material';
import { MessageWithRepliedMessage } from '../_models/message-with-replied-message';
import { MessageService } from '../_services/message.service';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CreateMessageDialogComponent } from '../create-message-dialog/create-message-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input()
  numberOfMessagesPerPage: number;
  numberOfMessages: number;
  pageIndex: number;
  messages: MessageWithRepliedMessage[];
  errorResponse: HttpErrorResponse;

  constructor(
    private messageService: MessageService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    this.pageIndex = 0;
    this.messageService.getMessagesCount()
      .pipe(
        mergeMap(
          n => {
            this.numberOfMessages = n;
            return this.getPage(this.pageIndex);
          }
        )
      ).subscribe(
      messages => this.messages = messages,
      errorResponse => this.errorResponse = errorResponse,
    );
  }

  getPage(pageNumber: number): Observable<MessageWithRepliedMessage[]> {
    return this.messageService.getMessagesWithRepliedRanged(
      pageNumber * this.numberOfMessagesPerPage, this.numberOfMessagesPerPage);
  }

  onPageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.getPage(event.pageIndex)
      .subscribe(
        messages => this.messages = messages,
        errorResponse => this.errorResponse = errorResponse,
      );
  }

  createMessage(replyTo: MessageWithRepliedMessage) {
    this.dialog.open(CreateMessageDialogComponent, {
      data: replyTo,
    }).afterClosed().subscribe(
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.errorResponse = result;
          } else {
            if (this.pageIndex === 0) {
              this.messages.unshift(result);
              if (this.numberOfMessages >= this.numberOfMessagesPerPage) {
                this.messages.pop();
              }
              this.numberOfMessages += 1;
            } else {
              this.initialize();
            }
          }
        }
      }
    );
  }
}
