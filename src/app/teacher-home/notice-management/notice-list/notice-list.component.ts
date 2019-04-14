import {Component, OnInit} from '@angular/core';
import {NoticeMessage} from '../../../_models';
import {HttpErrorResponse} from '@angular/common/http';
import {NoticeService} from '../../../_services';

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

  constructor(
    private noticeService: NoticeService
  ) {
  }

  getTeacherNotices(): void {
    this.noticeService.getAllNotices().subscribe(
      (dataSource: NoticeMessage[]) => {
        this.dataSource = dataSource;
      },
      errorResponse => this.errorResponse = errorResponse
    );
  }

  ngOnInit() {
    this.getTeacherNotices();
  }

  editNotice() {
    // TODO
  }

  removeNotice(noticeId: number) {
    // TODO
  }
}
