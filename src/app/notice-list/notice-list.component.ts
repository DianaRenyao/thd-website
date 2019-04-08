import { Component, OnInit } from '@angular/core';
import { NoticeMessage } from '../_models';
import { NoticeService } from '../_services/notice.service';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.scss']
})
export class NoticeListComponent implements OnInit {

  notices: NoticeMessage[];

  constructor(
    private noticeService: NoticeService
  ) {
  }

  ngOnInit() {
  }

}
