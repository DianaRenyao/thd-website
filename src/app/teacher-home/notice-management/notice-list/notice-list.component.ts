import { Component, OnInit } from '@angular/core';
import { NoticeMessage, SessionMessage } from '../../../_models';
import { HttpErrorResponse } from '@angular/common/http';
import { NoticeService, SessionService } from '../../../_services';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {

  displayedColumns: string[] = [
    'timeCreated',
    'title',
    'detail',
    'action',
  ];
  dataSource: NoticeMessage[];
  errorResponse: HttpErrorResponse;
  session: SessionMessage;

  constructor(
    private noticeService: NoticeService,
    private sessionService: SessionService
  ) {
  }

  getTeacherNotices(session: SessionMessage): void {
    this.noticeService.getTeacherNotices(session).subscribe(
      (dataSource: NoticeMessage[]) => {
        this.dataSource = dataSource;
      },
      errorResponse => this.errorResponse = errorResponse
    );
  }

  getSession(): void {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

  ngOnInit() {
    this.getSession();
    this.getTeacherNotices(this.session);
  }

  editNotice() {
    // TODO
  }

  removeNotice(noticeId: number) {
    this.noticeService.deleteNotice(noticeId).subscribe(
      () => {
        const index = this.dataSource.findIndex(n => n.noticeId === noticeId);
        this.dataSource.splice(index, 1);
        this.dataSource = [...this.dataSource]; // force refresh
      },
      errorResponse => this.errorResponse = errorResponse,
    );
  }
}
