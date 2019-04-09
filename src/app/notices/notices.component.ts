import { Component, Input, OnInit } from '@angular/core';
import { NoticeMessage } from '../_models';
import { HttpErrorResponse } from '@angular/common/http';
import { NoticeService } from '../_services';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  @Input()
  numberOfNoticesPerPage: number;
  numberOfNotices: number;
  notices: NoticeMessage[];
  errorResponse: HttpErrorResponse;

  constructor(
    private noticeService: NoticeService
  ) {
  }

  ngOnInit() {
    this.noticeService.getNoticesCount()
      .pipe(
        mergeMap(
          n => {
            this.numberOfNotices = n;
            return this.getPage(0);
          }
        )
      ).subscribe(
      notices => this.notices = notices,
      errorResponse => this.errorResponse = errorResponse,
    );
  }

  getPage(pageNumber: number): Observable<NoticeMessage[]> {
    return this.noticeService.getNoticesRanged(
      pageNumber * this.numberOfNoticesPerPage, this.numberOfNoticesPerPage);
  }

  onPageEvent(event: PageEvent) {
    this.getPage(event.pageIndex)
      .subscribe(
        notices => this.notices = notices,
        errorResponse => this.errorResponse = errorResponse,
      );
  }
}
