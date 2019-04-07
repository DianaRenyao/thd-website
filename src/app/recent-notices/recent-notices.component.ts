import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../_services/notice.service';
import { NoticeMessage } from '../_models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recent-notices',
  templateUrl: './recent-notices.component.html',
  styleUrls: ['./recent-notices.component.scss']
})
export class RecentNoticesComponent implements OnInit {

  notices: NoticeMessage[];
  errorResponse: HttpErrorResponse;

  constructor(
    private noticeService: NoticeService
  ) {
  }

  ngOnInit() {
    this.noticeService.getRecentNotices().subscribe(
      notices => this.notices = notices,
      errorResponse => this.errorResponse = errorResponse,
    );
  }

}
